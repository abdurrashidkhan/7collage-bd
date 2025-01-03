import Swal from "sweetalert2";
export default async function insertAdmissionInfo(insertData, seIsLoading, reset) {
  try {
    // C:\projects\digital-marketing-agency\src\app\api\merge-marketing\v1\users\insert-user\[email].js
    const res = await fetch(`/api/add-admission-info/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(insertData),
    });
    // }
    if (!res.ok) {
      Swal.fire("Failed", "Try again late", "error");
    }
    if (res.ok) {
      seIsLoading(false);
      reset();
      Swal.fire("Congestion", "your admission submitted", "success");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
