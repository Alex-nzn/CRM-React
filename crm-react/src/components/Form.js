import TestData from "./TestData";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const data = TestData();
  console.log(data);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("Add");
      navigate("/table");
    });
  };

  // function renderTestData() {
  //   let testData = getTestData();
  //   setFormData(testData);
  // }

  return (
    <body className="with-nav radial-bg flex-center">
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
                autocomplete="on"
                className="form-control"
                placeholder="Имя и Фамилия"
                required
                value={data.name}
              />
            </div>
            <div className="form-group">
              <input
                id="phone"
                type="text"
                name="phone"
                autocomplete="on"
                className="form-control"
                placeholder="Телефон"
                value={data.phone}
              />
            </div>
            <div className="form-group">
              <input
                id="email"
                type="email"
                name="email"
                autocomplete="on"
                className="form-control"
                placeholder="Email"
                required
                value={data.email}
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Продукт:</label>
              <select
                id="product"
                name="product"
                className="form-control"
                id="exampleFormControlSelect1"
                value={data.product}
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
    </body>
  );
};

export default Form;
