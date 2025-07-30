import firebaseConfig from '../firebaseConfig';
auth=firebaseConfig.auth;
export const submitApplication = async (type, applicationData) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const userId = user.uid;
    const createdAt = new Date().toISOString(); 

    const payload = {
      ...applicationData,
      type,          
      createdAt,
    };

    await fetch(
      `https://practice-40201-default-rtdb.asia-southeast1.firebasedatabase.app/application/${userId}.json`,
      {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    alert("Application submitted successfully!");
  } catch (error) {
    console.error("Application submission failed:", error);
    alert("Submission failed: " + error.message);
  }
};
