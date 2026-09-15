/**
 * Smart Lead & Buying Intent Detection Engine for Galactic 3D
 * 
 * Strict Intent-Aware Triggering:
 * The lead capture form ("Connect with Galactic 3D Engineering") is displayed
 * ONLY when the user's intent matches one of 4 actionable categories:
 * 1. Quote Request (e.g., "I need a quote", "How much will this part cost?", "Request quotation", "Get pricing", "Upload CAD file for quote")
 * 2. Contact Intent (e.g., "How do I contact Galactic 3D?", "Talk to an engineer", "Connect me with your team", "Need technical consultation")
 * 3. Project Inquiry (e.g., "I want to manufacture a part", "I have a project", "Need DMLS production", "Need prototype development")
 * 4. Training Registration (e.g., "Register for workshop", "Enroll in training", "Join internship")
 */

const STRICT_LEAD_PATTERNS = {
  // 1. QUOTE REQUEST
  QUOTE_REQUEST: [
    /\b(i need|i want|get|request|give me|send me|ask for)\s+(a\s+)?(quote|quotation|pricing|cost estimate|price estimate)\b/i,
    /^request quote$/i,
    /^get quote$/i,
    /^quote$/i,
    /^pricing$/i,
    /how much (will|would|does|is) (this|a|my|the|our)?\s*(part|model|print|order|project|cad|design)?\s*cost\b/i,
    /\b(cost to print|price per part|get pricing|pricing for my part|quote for my (part|project|cad))\b/i,
    /\bupload cad (file )?(for quote|to get quote|for quotation|for pricing)\b/i,
    /\b(rfq|submit rfq|request an engineering quote)\b/i,
    /how do i request an engineering quote/i,
    /can (i|we) get a quote/i,
  ],

  // 2. CONTACT INTENT
  CONTACT_INTENT: [
    /\bhow (do|can) i contact (galactic|galactic 3d|you|your team|engineering)\b/i,
    /\b(how to contact|how to reach|how to connect with) (galactic|galactic 3d|you|your team|an engineer)\b/i,
    /\b(talk|speak) to (an? )?(engineer|expert|specialist|team|representative|consultant)\b/i,
    /\b(connect me with|connect with) (your|the|an) (team|engineers?|specialist|sales|expert)\b/i,
    /\b(need|want|schedule|book|request)\s+(a\s+)?(technical |engineering )?(consultation|consultant|meeting|call|discussion)\b/i,
    /^contact team$/i,
    /^contact us$/i,
    /^contact$/i,
    /\b(call me|reach out to me|get in touch with me)\b/i,
  ],

  // 3. PROJECT INQUIRY
  PROJECT_INQUIRY: [
    /\b(i want to|i need to|we want to|we need to|looking to)\s+(manufacture|fabricate|produce|print|make|build|order)\s+(a|an|my|our|some|\d+)?\s*(part|parts|component|components|prototype|model|batch)\b/i,
    /\b(i have|we have)\s+(a|an|new)?\s*(project|manufacturing requirement|part requirement|cad model to print|cad design to manufacture)\b/i,
    /\b(need|want)\s+(dmls|metal 3d|additive)\s+(production|manufacturing|printing|fabrication)\b/i,
    /\b(need|want|looking for)\s+prototype\s+development\b/i,
    /\b(order|purchase)\s+\d+\s*(parts|components|prototypes)\b/i,
  ],

  // 4. TRAINING REGISTRATION
  TRAINING_REGISTRATION: [
    /\b(register|sign up|enroll|apply)\s+(for|in|to)\s+(the\s+)?(workshop|training|course|program|internship|lab)\b/i,
    /\b(join|apply for)\s+(the\s+)?(internship|training program|workshop)\b/i,
    /\b(want to enroll|interested in enrolling|enroll in training|enroll me)\b/i,
    /^register for workshop$/i,
    /^enroll in training$/i,
    /^join internship$/i,
  ],
};

export function detectIntent(userMessage) {
  if (!userMessage || typeof userMessage !== 'string') {
    return { hasBuyingIntent: false, primaryIntent: 'GENERAL_INQUIRY', confidence: 0, reason: null, suggestForm: false };
  }

  const message = userMessage.trim();

  // Informational & Verification questions should NOT trigger lead form
  // e.g. "Do you provide DfAM?", "What services do you provide?", "What materials do you use?", "About Galactic 3D"
  const isPureGeneralButton = /^(about galactic 3d|services|materials|industries|training programs)$/i.test(message);
  if (isPureGeneralButton) {
    return {
      hasBuyingIntent: false,
      primaryIntent: 'GENERAL_INQUIRY',
      confidence: 1.0,
      reason: 'General navigation button clicked',
      suggestForm: false,
    };
  }

  // Check against strict lead intent patterns
  for (const [intentKey, patterns] of Object.entries(STRICT_LEAD_PATTERNS)) {
    for (const pattern of patterns) {
      if (pattern.test(message)) {
        return {
          hasBuyingIntent: true,
          primaryIntent: intentKey,
          allIntents: [intentKey],
          confidence: 0.95,
          reason: `Matched actionable intent: ${intentKey}`,
          suggestForm: true,
        };
      }
    }
  }

  // Check if user shared direct contact details (email or phone)
  const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(message);
  const hasPhone = /(?:\+?91[\-\s]?)?[6-9]\d{9}|\b\d{10}\b/.test(message);

  if (hasEmail || hasPhone) {
    return {
      hasBuyingIntent: true,
      primaryIntent: 'CONTACT_PROVIDED',
      allIntents: ['CONTACT_PROVIDED'],
      confidence: 0.95,
      extractedEmail: (message.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/) || [])[0],
      extractedPhone: (message.match(/(?:\+?91[\-\s]?)?[6-9]\d{9}|\b\d{10}\b/) || [])[0],
      reason: 'User shared contact details directly',
      suggestForm: false,
    };
  }

  return {
    hasBuyingIntent: false,
    primaryIntent: 'GENERAL_INQUIRY',
    confidence: 0.2,
    reason: 'Informational or verification query',
    suggestForm: false,
  };
}
