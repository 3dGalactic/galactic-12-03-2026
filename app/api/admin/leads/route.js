import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const format = searchParams.get('format'); // 'csv' or json

    const { db } = await connectToDatabase();
    const leadsColl = db.collection('leads');

    const query = {};
    if (status && status !== 'All') {
      query.status = status;
    }

    const leads = await leadsColl.find(query).sort({ createdAt: -1 }).toArray();

    // Export to CSV if requested
    if (format === 'csv') {
      const headers = ['Lead ID', 'Name', 'Email', 'Phone', 'Company', 'Requirement', 'Source', 'Status', 'Created At'];
      const csvRows = [headers.join(',')];

      for (const lead of leads) {
        const row = [
          `"${lead._id || ''}"`,
          `"${(lead.name || '').replace(/"/g, '""')}"`,
          `"${(lead.email || '').replace(/"/g, '""')}"`,
          `"${(lead.phone || '').replace(/"/g, '""')}"`,
          `"${(lead.company || '').replace(/"/g, '""')}"`,
          `"${(lead.requirement || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
          `"${(lead.source || '').replace(/"/g, '""')}"`,
          `"${lead.status || 'New'}"`,
          `"${lead.createdAt || ''}"`,
        ];
        csvRows.push(row.join(','));
      }

      return new Response(csvRows.join('\n'), {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="galactic3d_leads_${Date.now()}.csv"`,
        },
      });
    }

    return NextResponse.json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error('Error fetching admin leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads', details: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { id, status, notes } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Lead id and status are required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const leadsColl = db.collection('leads');

    const updateFields = {
      status,
      updatedAt: new Date().toISOString(),
    };
    if (notes !== undefined) {
      updateFields.notes = notes;
    }

    await leadsColl.updateOne({ _id: id }, { $set: updateFields });

    return NextResponse.json({
      success: true,
      message: `Lead status updated to ${status}`,
    });
  } catch (error) {
    console.error('Error updating lead:', error);
    return NextResponse.json(
      { error: 'Failed to update lead', details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Lead id is required' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const leadsColl = db.collection('leads');

    await leadsColl.deleteOne({ _id: id });

    return NextResponse.json({
      success: true,
      message: 'Lead deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting lead:', error);
    return NextResponse.json(
      { error: 'Failed to delete lead', details: error.message },
      { status: 500 }
    );
  }
}
