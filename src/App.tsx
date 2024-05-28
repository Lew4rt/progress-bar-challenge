import { useState } from "react";
import "./App.css";

interface FormData {
  name: string;
  documentType: string;
  documentCategory: string;
  email: string;
}

function App(){
  const [formData, setFormData] = useState<FormData>({
    name: "",
    documentType: "",
    documentCategory: "",
    email: "",
  });

  const filledFieldsCount = (): number => {
    return ["name", "documentType", "documentCategory", "email"].filter(
      (field) => formData[field as keyof FormData] !== "").length;
  };

  const progressPercentage = (): number => {
    const count = filledFieldsCount();
    return (count / 4) * 100;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="form-body">
      <form>
        <div className="form-group">
          <span>Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

        </div>
        <div className="form-group">
          <span>Document Type:</span>
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
          >
            <option value="">Select a type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>
        <div className="form-group">
          <span>Document Category:</span>
          <select
            name="documentCategory"
            value={formData.documentCategory}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <div className="form-group">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage()}%` }}
        ></div>
      </div>
    </div>
  );
}

export default App;
