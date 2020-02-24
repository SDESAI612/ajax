import { ajax } from "rxjs/ajax";

const requestObj = {
  url: "https://api.github.com/users?per_page=5",
  method: "GET"
};

const obs$ = ajax(requestObj);
obs$.subscribe(data => {
  console.log(JSON.stringify(data.response));
});
