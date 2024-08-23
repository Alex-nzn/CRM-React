import TestData from "./TestData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Form = () => {
  const data = TestData();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        navigate("/table");
      }
    });
  };

  useEffect(() => {
    document.body.className = "with-nav radial-bg flex-center";
  }, []);

  const [name, setName] = useState(data.name);
  const [phone, setPhone] = useState(data.phone);
  const [email, setEmail] = useState(data.email);
  const [product, setProduct] = useState(data.product);

  // function renderTestData() {
  //   let testData = getTestData();
  //   setFormData(testData);
  // }

  return (
    // <body className="with-nav radial-bg flex-center">
    <div className="white-plate white-plate--payment">
      <div className="container-fluid">
        <div className="white-plate__header text-center">
          <p className="white-plate__logo">
            <span>Форма</span> заявок
          </p>
        </div>

        <div className="white-plate__line-between white-plate__line-between--main"></div>

        <form onSubmit={handleSubmit} id="form" method="POST" action="">
          <label>Ваши данные:</label>
          <div className="form-group">
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="on"
              className="form-control"
              placeholder="Имя и Фамилия"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              id="phone"
              type="text"
              name="phone"
              autoComplete="on"
              className="form-control"
              placeholder="Телефон"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="on"
              className="form-control"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Продукт:</label>
            <select
              id="product"
              name="product"
              className="form-control"
              onChange={(e) => setProduct(e.target.value)}
              value={product}
            >
              <option value="course-html">Курс по верстке</option>
              <option value="course-js">Курс по JavaScript</option>
              <option value="course-vue">Курс по VUE JS</option>
              <option value="course-php">Курс по PHP</option>
              <option value="course-wordpress">Курс по WordPress</option>
            </select>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block"
              // onClick={renderTestData}
            >
              Оформить заявку
            </button>
          </div>
        </form>
      </div>
    </div>
    // </body>
  );
};

export default Form;
