import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const projects = [
  { id:  "0" , name : "Go To Home" , path :""},

  { id: "1", name: "Counter With Undo / Redo", path: "Counter", folder: "Counter_App" },
  { id: "2", name: "Close Dropdown On Outside Click", path: "ClickOutsideDropdown", folder: "Close_Outside_Click" },
  { id: "3", name: "Load More Buttons", path: "LoadMoreButton", folder: "Load_More_Buttons" },
  { id: "4", name : "Tree View or Menu UI or Recursive Navigation Menu" , path: "TreeView" , folder: "Tree_View"},
  { id: "5", name : "Pagination" , path: "Pagination" , folder: "Pagination"},
   { id: "6", name : "OTP Login" , path: "OtpLogin" , folder: "Otp_Login"},
   { id: "7", name : "Ai Assistant Chat Bot" , path: "AiAssistant" , folder: "Ai_Assistant"},
   { id: "8", name : "File Explorer" , path: "FileExplorer" , folder: "File_Explorer"},
   { id: "9", name : "CRUD Operations Using Axios" , path: "CrudOperation" , folder: "Crud_Using_Axios"},
    { id: "10", name : "Toast Component" , path: "ToastNotification" , folder: "Toast_Component"},
    { id: "11", name : "Stepper Component" , path: "Stepper" , folder: "Stepper_Component"},
];


function ProjectButton() {
  const navigate = useNavigate();

  const goToProject = (proj) => {
    navigate(`/Components/${proj.id}.${proj.folder}/${proj.path}`);
  };

  return (
     <div className="parent-btn">
       {projects.map((proj) => {
        return (
          <button id="btn" key={proj.id} onClick={() => goToProject(proj)}>
            {proj.name}
          </button>
          
        );
      })}
     </div>
  );
}

export default ProjectButton;
