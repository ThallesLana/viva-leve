import axios from "axios";
import { LeadData } from "../interfaces/LeadData";

export const sendLeadData = async(data: LeadData) => {
    try {
        const payload = {
            ...data,
            sheet: import.meta.env.VITE_GOOGLE_SHEET_ID,
        };
        const res = await axios.post(
            `${import.meta.env.VITE_GOOGLE_APP_SCRIPT_URL + import.meta.env.VITE_GOOGLE_APP_SCRIPT_ID}/exec`,
            new URLSearchParams(payload),
            {
              timeout: 10000,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }
          );
          

        return res;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.error('Error sending lead data:', err.message);
            if (err.response) {
                console.error('Server response:', err.response.data);
                console.error('Status code:', err.response.status);
            } else if (err.request) {
                console.error('No response received');
            }
        } else {
            console.error('Unexpected error:', err);
        }
        throw err;
    }
}
