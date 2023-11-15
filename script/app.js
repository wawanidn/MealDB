const searchMeal = async (e) => {
    e.preventDefault();

    const input = document.querySelector('.input')
    const title = document.querySelector('.title')
    const info = document.querySelector('.info')
    const img = document.querySelector('.img')
    const ingredientsOutput = document.querySelector('.ingredients')

    const fetchMealdata = async (val) => {
        await fetch ('https://www.themealdb.com/api/json/v1/1/search.php?s=${val}')
    }
}



const form = document.querySelector('form');
form.addEventListener("submit", searchMeal);

const magnifier = document.querySelector('magnifier');
magnifier.addEventListener("click", searchMeal);