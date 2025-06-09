const URL_LISTING = `https://fakestoreapi.com/products`;

/* Call API

    - Cach 1: Su dung thu vien axios call api.
    - Cach 2: Su dung phuong thuc co san cua Browser -> fetch().
    
*/

// Cach 1: Su dung thu vien axios de call API
// Async bien ham getApi thanh promise
// Awai -> Thuc thi loi hua

const getApi = async (url) => {
  try {
    const respond = await axios.get(url);
    const result = respond.data;

    renderData(result);
  } catch (error) {
    console.log("Loi khi call api:", error);
  }
};

getApi(URL_LISTING);

// Show Data UI
const renderData = (data) => {
  // console.log(data);
  const productHTML = document.querySelector(".ul-js");

  let newHTML = ``;
  // console.log(productHTML);
  data.forEach((item, index) => {
    console.log(item);
    newHTML += ` 
        <li>
            <a href="./detail.html?id=${item.id}"> ${item.title}</a>
        </li> 
        `;
  });
  // console.log(newHTML);
  productHTML.innerHTML = newHTML;
};
