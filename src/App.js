import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    //thenでデータ取得した後に実行する関数を設定できる
    //catchはエラー情報を取得することができる getの中のurlを存在しないサイトにするとエラー取得できる
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    // alert("users");
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    // alert("users");
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}
