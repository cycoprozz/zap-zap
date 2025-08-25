exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Parse the form data
    const formData = JSON.parse(event.body);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.businessName) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Missing required fields'
        })
      };
    }

    // Prepare data for Zapier
    const zapierData = {
      name: formData.name,
      email: formData.email,
      businessName: formData.businessName,
      timestamp: new Date().toISOString(),
      source: 'DOJMARK Assets Form',
      submittedFrom: event.headers['user-agent'] || 'Unknown'
    };

    // Send to Zapier webhook
    const zapierResponse = await fetch('https://hooks.zapier.com/hooks/catch/24339843/ut78ea3/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zapierData)
    });

    if (zapierResponse.ok) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Form submitted successfully'
        })
      };
    } else {
      throw new Error(`Zapier responded with status: ${zapierResponse.status}`);
    }

  } catch (error) {
    console.error('Error in submit-form function:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
};
