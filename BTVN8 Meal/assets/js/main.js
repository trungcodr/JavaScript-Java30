const search = document.querySelector("#search");
const submit = document.querySelector("#submit");
const mealsEl = document.querySelector("#meals");
const resultHeading = document.querySelector("#result-heading");
const single_mealEl = document.querySelector("#single-meal");
const randomBtn = document.querySelector("#random"); // 

// API lay danh sach meal
const getMealsAPI = (term) => {
  return axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
};

// API lay chi tiet meal theo id
const getMealByIdAPI = (mealId) => {
  return axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
};

// API lay ngau nhien meal
const getRandomMealAPI = () => { 
    return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
}

// Lay danh sach meal
const getMeals = async (term) => {
  try {
    const res = await getMealsAPI(term);
    const meals = res.data.meals;

    renderMealList(meals, term);
  } catch (error) {
    console.log(error);
    resultHeading.innerHTML = `<p>Đã xảy ra lỗi khi tìm kiếm. Vui lòng thử lại sau.</p>`;
  }
};

// Lay chi tiet meal theo id
const getMealById = async (mealId) => { 
    try {
        const res = await getMealByIdAPI(mealId); 
        const meal = res.data.meals[0]; 
        
        renderMeal(meal); 
    } catch (error) {
        console.log(error);
        single_mealEl.innerHTML = `<p>Không thể tải chi tiết bữa ăn. Vui lòng thử lại.</p>`;
    }
};

// Lay ngau nhien meal
const getRandomMeal = async () => {
    try {
        const res = await getRandomMealAPI(); 
        const meal = res.data.meals[0];
        
        renderMeal(meal); 
    } catch (error) {
        console.log(error);
        single_mealEl.innerHTML = `<p>Không thể tải bữa ăn ngẫu nhiên. Vui lòng thử lại.</p>`;
    }
};


// Hien thi danh sach la ngoai giao dien
const renderMealList = (arr, term) => {
    mealsEl.innerHTML = ""; 
    single_mealEl.innerHTML = ""; 

    
    if (term) {
        resultHeading.innerHTML = `<h2>Kết quả tìm kiếm cho từ khóa '${term}':</h2>`;
    } else {
        resultHeading.innerHTML = ''; 
    }

    if (!arr || arr.length === 0) { 
        resultHeading.innerHTML = `<p>Không tìm thấy kết quả yêu cầu. Vui lòng thử lại !</p>`;
        return;
    }

    arr.forEach((m) => {
        mealsEl.innerHTML += `
            <div class="meal" onclick="getMealById(${m.idMeal})">
                <img src="${m.strMealThumb}" alt="${m.strMeal}" />
                <div class="meal-info">
                    <h3>${m.strMeal}</h3>
                </div>
            </div>
        `;
    });
};

// Hien thi chi tiet mot meal ra giao dien
const renderMeal = (meal) => {
    mealsEl.innerHTML = ''; 
    resultHeading.innerHTML = ''; 

    const ingredients = [];
    
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        } else {
            // Dừng nếu không còn thành phần nào
            break;
        }
    }

    single_mealEl.innerHTML = `
        <div class="single-meal">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="single-meal-info">
                ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ""}
                ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ""}
            </div>
            <div class="main">
                <p><strong>Instructions:</strong><br>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
                </ul>
            </div>
            ${meal.strYoutube ? `
            <div class="video-container">
                <h2>Video Tutorial</h2>
                <iframe width="560" height="315" src="${meal.strYoutube.replace('watch?v=', 'embed/')}" frameborder="0" allowfullscreen></iframe>
            </div>` : ''}
        </div>
    `;
};


// Su kien click cho nút tìm kiếm
submit.addEventListener("click", (e) => {
  e.preventDefault();

  const term = search.value;
  if (term.trim() === "") {
    alert("Tiêu đề không được để trống");
    return;
  }
  getMeals(term);
  search.value = "";
});

// Su kien click cho nut ngau nhien
randomBtn.addEventListener("click", () => { 
    
    mealsEl.innerHTML = "";
    resultHeading.innerHTML = "";
    single_mealEl.innerHTML = "";

    getRandomMeal(); 
});