interface FormData {
  name: string;
  email: string;
  phone: string;
}

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec'; // Replace with your actual Google Apps Script URL

export const saveToGoogleSheets = async (data: FormData): Promise<boolean> => {
  try {
    const response = await fetch(
      GOOGLE_SCRIPT_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'no-cors' // Required for Google Apps Script
      }
    );
    
    // Since we're using no-cors, we can't read the response
    // We'll assume success if no error is thrown
    return true;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
};

// Instructions for setting up Google Apps Script:
/*
1. Create a new Google Sheet with columns: Name, Email, Phone, Timestamp
2. Go to Extensions > Apps Script
3. Replace the default code with:

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    const data = JSON.parse(e.postData.contents);
    
    // Add timestamp
    const timestamp = new Date();
    
    // Append new row
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      timestamp
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

4. Save the script
5. Click Deploy > New Deployment
6. Select type: Web app
7. Execute as: Me
8. Who has access: Anyone
9. Deploy
10. Copy the Web app URL and extract the script ID (the part after /macros/s/ and before /exec)
11. Replace YOUR_SCRIPT_ID_HERE with the actual script ID
*/