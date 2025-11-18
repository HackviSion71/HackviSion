import React from "react";
import CourseCard from "./coursecard";
import erpImage from "../assets/CCNA.jpg";
import linuxImage from "../assets/Linux.jpg";
import cyberImage from "../assets/cyber security.jpg";
import AWSimg from "../assets/AWS_images.png";
import Asurimg from "../assets/Azure-Images.png";

function Courses() {
  const courses = [
    {
      image: erpImage,
      title: "CCNA (Cisco Certified Network Associate)",
      description:
        "Routing & switching, network fundamentals, VLANs, inter-VLAN routing, and real lab scenarios to clear CCNA.",
      features:<>
          <ul className="list-unstyled mb-0">
            <li>✔ Packet Tracer & real device labs</li>
            <li>✔ Certification-focused syllabus</li>
            <li>✔ Resume & interview prep</li>
          </ul>
      </>
    },
    {
      image: linuxImage,
      title: "Linux Administration",
      description:
        "Master shell, users & permissions, services, systemd, networking, storage, and server administration for production systems.",
      features:<>
        <ul className="list-unstyled mb-0">
            <li>✔ Hands-on CLI practice</li>
            <li>✔ Bash scripting & automation</li>
            <li>✔ Server hardening basics</li>
          </ul>
      </>
    },
    {
      image: cyberImage,
      title: "Cyber Security Fundamentals",
      description:
        "Security fundamentals, threat modeling, network defense, basic ethical hacking, and incident response labs.",
      features:<>
        <ul className="list-unstyled mb-0">
            <li>✔ Vulnerability assessment labs</li>
            <li>✔ Defensive techniques & best practices</li>
            <li>✔ Practical CTF-style exercises</li>
          </ul>
      </>
    },
    {
      image: AWSimg,
      title: "AWS (Amazon Web Services – Cloud Practitioner & Solutions Architect)",
      description:
        "Learn core cloud concepts, AWS services, EC2, S3, IAM, VPC, Load Balancing, Auto Scaling, RDS, and hands-on lab scenarios to master AWS Cloud.",
      features:<>
        <ul className="list-unstyled mb-0">
            <li>✔ Hands-on EC2, S3, VPC & IAM labs</li>
            <li>✔ Certification-focused syllabus</li>
            <li>✔ Resume & interview preparation</li>
          </ul>
      </>
    },
    {
      image: Asurimg,
      title: "Azure (Microsoft Azure – Fundamentals & Solutions Architect)",
      description:
        "Learn core cloud concepts, Azure services, Virtual Machines, Storage, Azure AD, Virtual Networks, Load Balancer, App Services, SQL Database, and hands-on lab scenarios to master Microsoft Azure.",
      features:<>
        <ul className="list-unstyled mb-0">
            <li>✔ Hands-on VM, Storage, VNet & Azure AD labs</li>
            <li>✔ Certification-focused syllabus (AZ-900 / AZ-104 / AZ-305)</li>
            <li>✔ Resume & interview preparation</li>
          </ul>
      </>
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#001F3F" }}>
          Courses
        </h2>

        <div className="row justify-content-center g-4">
          {courses.map((course, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <CourseCard
                image={course.image}
                title={course.title}
                description={course.description}
                features={course.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
