// import { useState } from "react";
// import axios from "axios";

// const axiosAPI = axios.create();

// const BasicElements = () => {
//   // State to manage form data
//   const [formdata, setFormdata] = useState({
//     name: "",
//     quantity: "",
//     description: "",
//   });

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formdata);
//     axiosAPI
//       .post("http://localhost:5000/api/add-item", formdata)
//       .then((res) => {
//         if (res.data && res.data.msg) {
//           alert(res.data.msg);
//         } else {
//           alert("Your request was successful!");
//         }
//       })
//       .catch((error) => {
//         console.error("Error occurred:", error);
//         alert("An error occurred while processing your request.");
//       });
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           backgroundColor: "#f0f0f0",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
//           width: "80%",
//           maxWidth: "600px",
//           marginTop: "50px", // Keep the card downward
//         }}
//       >
//         <h1
//           style={{
//             textAlign: "center",
//             color: "#124076",
//             marginBottom: "20px",
//           }}
//         >
//           Add Item
//         </h1>
//         {/* Input for item name */}
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", marginBottom: "5px" }}>
//             Enter item name
//           </label>
//           <input
//             type="text"
//             name="name"
//             onChange={(e) =>
//               setFormdata({ ...formdata, name: e.target.value })
//             }
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//             }}
//           />
//         </div>
//         {/* Input for quantity */}
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", marginBottom: "5px" }}>
//             Enter quantity
//           </label>
//           <input
//             type="number"
//             name="quantity"
//             onChange={(e) =>
//               setFormdata({ ...formdata, quantity: e.target.value })
//             }
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//             }}
//           />
//         </div>
//         {/* Textarea for description */}
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", marginBottom: "5px" }}>
//             Description
//           </label>
//           <textarea
//             name="description"
//             onChange={(e) =>
//               setFormdata({ ...formdata, description: e.target.value })
//             }
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               minHeight: "100px",
//             }}
//           ></textarea>
//         </div>
//         {/* Form submission buttons */}
//         <div style={{ textAlign: "center" }}>
//           <button
//             type="submit"
//             className="btn-submit"
//             style={{
//               backgroundColor: "#124076",
//               color: "#fff",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Submit
//           </button>
//           <button
//             type="button"
//             style={{
//               backgroundColor: "#ccc",
//               color: "#fff",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               border: "none",
//               cursor: "pointer",
//               marginLeft: "10px",
//             }}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BasicElements;









// import { useState } from "react";
// import axios from "axios";

// const axiosAPI = axios.create();

// const BasicElements = () => {
//   // State to manage form data
//   const [formdata, setFormdata] = useState({
//     name: "",
//     quantity: "",
//     description: "",
//   });

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formdata);
//     axiosAPI
//       .post("http://localhost:5000/api/add-item", formdata)
//       .then((res) => {
//         if (res.data && res.data.msg) {
//           alert(res.data.msg);
//         } else {
//           alert("Your request was successful!");
//         }
//       })
//       .catch((error) => {
//         console.error("Error occurred:", error);
//         alert("An error occurred while processing your request.");
//       });
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           backgroundColor: "#f0f0f0",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
//           width: "80%",
//           maxWidth: "600px",
//           marginTop: "200px", // Move the card downwards
//         }}
//       >
//         <h1
//           style={{
//             textAlign: "center",
//             color: "#124076",
//             marginBottom: "20px",
//           }}
//         >
//           Add Item
//         </h1>
//         {/* Input for item name */}
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", marginBottom: "5px" }}>
//             Enter item name
//           </label>
//           <input
//             type="text"
//             name="name"
//             onChange={(e) =>
//               setFormdata({ ...formdata, name: e.target.value })
//             }
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//             }}
//           />
//         </div>
//         {/* Input for quantity */}
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", marginBottom: "5px" }}>
//             Enter quantity
//           </label>
//           <input
//             type="number"
//             name="quantity"
//             onChange={(e) =>
//               setFormdata({ ...formdata, quantity: e.target.value })
//             }
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//             }}
//           />
//         </div>
//         {/* Textarea for description */}
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", marginBottom: "5px" }}>
//             Description
//           </label>
//           <textarea
//             name="description"
//             onChange={(e) =>
//               setFormdata({ ...formdata, description: e.target.value })
//             }
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               minHeight: "100px",
//             }}
//           ></textarea>
//         </div>
//         {/* Form submission buttons */}
//         <div style={{ textAlign: "center" }}>
//           <button
//             type="submit"
//             className="btn-submit"
//             style={{
//               backgroundColor: "#124076",
//               color: "#fff",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Submit
//           </button>
//           <button
//             type="button"
//             style={{
//               backgroundColor: "#ccc",
//               color: "#fff",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               border: "none",
//               cursor: "pointer",
//               marginLeft: "10px",
//             }}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BasicElements;
            







import { useState, useEffect } from "react";
import axios from "axios";

const axiosAPI = axios.create();

const BasicElements = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    quantity: "",
    description: "",
  });
  const [submittedItems, setSubmittedItems] = useState([]);

  useEffect(() => {
    fetchSubmittedItems();
  }, []);

  const fetchSubmittedItems = async () => {
    try {
      const response = await axiosAPI.get("http://localhost:5000/api/submitted-items");
      setSubmittedItems(response.data);
    } catch (error) {
      console.error("Error fetching submitted items:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    axiosAPI
      .post("http://localhost:5000/api/add-item", formdata)
      .then((res) => {
        if (res.data && res.data.msg) {
          alert(res.data.msg);
          fetchSubmittedItems(); // Fetch submitted items again after successful submission
        } else {
          alert("Your request was successful!"); // Display a default message if response doesn't have a specific message field
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        alert("An error occurred while processing your request.");
      });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          marginTop: "50px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            width: "80%",
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#124076",
              marginBottom: "20px",
            }}
          >
            Add Item
          </h1>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Enter item name
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) =>
                setFormdata({ ...formdata, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Enter quantity
            </label>
            <input
              type="number"
              name="quantity"
              onChange={(e) =>
                setFormdata({ ...formdata, quantity: e.target.value })
              }
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Description
            </label>
            <textarea
              name="description"
              onChange={(e) =>
                setFormdata({ ...formdata, description: e.target.value })
              }
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                minHeight: "100px",
              }}
            ></textarea>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn-submit"
              style={{
                backgroundColor: "#124076",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
            <button
              type="button"
              style={{
                backgroundColor: "#ccc",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h2>Submitted Items</h2>
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {submittedItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicElements;