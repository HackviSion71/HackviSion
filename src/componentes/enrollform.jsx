import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EnrollForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        course: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ message: "", type: "" }); // {message, type: 'success' | 'error'}

    const courses = [
        "CCNA",
        "Linux Administration",
        "Cyber Security Fundamentals",
        "Microsoft Azure",
        "AWS"
    ];

    // ✅ Validation function
    const validate = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = "Full name must be at least 3 characters long";
        } else if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
            newErrors.fullName = "Full name must contain only letters and spaces";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(
                formData.email.trim()
            )
        ) {
            newErrors.email = "Please enter a valid email address (e.g., name@gmail.com)";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
            newErrors.phone = "Please enter a valid 10-digit mobile number";
        }

        if (!formData.course) newErrors.course = "Please select a course";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ✅ Send form data via Web3Forms
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);
        setAlert({ message: "", type: "" });

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "dee8cc48-b278-46ef-85a0-a8862e0bbdb4"); // 🔑 replace with your actual key
        formDataToSend.append("Full Name", formData.fullName);
        formDataToSend.append("Email", formData.email);
        formDataToSend.append("Phone", formData.phone);
        formDataToSend.append("Course", formData.course);

        // 💬 Custom subject & sender
        formDataToSend.append("subject", `New Enrollment for ${formData.course}`);
        formDataToSend.append("from_name", "HackVision");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend,
            });

            const data = await response.json();
            setLoading(false);

            if (data.success) {
                setAlert({
                    message: "🎉 Submitted Successfully!.",
                    type: "success",
                });
                setFormData({ fullName: "", email: "", phone: "", course: "" });
                setErrors({});
                setTimeout(() => {
                    navigate("/viewcourses");
                }, 3000);
            } else {
                setAlert({ message: "❌ Failed to submit. Please try again later.", type: "error" });
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            setAlert({ message: "⚠️ Something went wrong. Try again later.", type: "error" });
        }
    };

    return (
        <section className="enroll-section position-relative">
            <div className="enroll-container">
                <h2 className="enroll-title">Enroll Now 🚀</h2>

                <form onSubmit={handleSubmit} noValidate>
                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="enroll-label">Full Name</label>
                        <input
                            type="text"
                            className={`form-control enroll-input ${errors.fullName ? "is-invalid" : ""
                                }`}
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={(e) =>
                                setFormData({ ...formData, fullName: e.target.value })
                            }
                        />
                        {errors.fullName && (
                            <div className="invalid-feedback">{errors.fullName}</div>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="enroll-label">Email</label>
                        <input
                            type="email"
                            className={`form-control enroll-input ${errors.email ? "is-invalid" : ""
                                }`}
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                        <label className="enroll-label">Phone Number</label>
                        <input
                            type="text"
                            className={`form-control enroll-input ${errors.phone ? "is-invalid" : ""
                                }`}
                            placeholder="Enter 10-digit phone number"
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                        />
                        {errors.phone && (
                            <div className="invalid-feedback">{errors.phone}</div>
                        )}
                    </div>

                    {/* Select Course */}
                    <div className="mb-4">
                        <label className="enroll-label">Select Course</label>
                        <select
                            className={`form-select enroll-select ${errors.course ? "is-invalid" : ""
                                }`}
                            value={formData.course}
                            onChange={(e) =>
                                setFormData({ ...formData, course: e.target.value })
                            }
                        >
                            <option value="">-- Choose a course --</option>
                            {courses.map((course, index) => (
                                <option key={index} value={course}>
                                    {course}
                                </option>
                            ))}
                        </select>
                        {errors.course && (
                            <div className="invalid-feedback">{errors.course}</div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="enroll-btn" disabled={loading}>
                            {loading ? "Submitting..." : "Enroll Now"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Loader */}
            {loading && (
                <div className="loader-overlay">
                    <div className="spinner"></div>
                </div>
            )}

            {/* Alert Box */}
            {alert.message && (
                <div className={`alert-box ${alert.type}`}>
                    <p>{alert.message}</p>
                    <button onClick={() => setAlert({ message: "", type: "" })}>OK</button>
                </div>
            )}
        </section>
    );
}

export default EnrollForm;
