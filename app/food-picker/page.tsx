"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Utensils, Globe } from "lucide-react";

const translations = {
  en: {
    title: "Meal Picker",
    selectMealType: "Select meal type",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    chooseForMe: "Choose for me",
    yourHealthyMeal: "Your healthy meal:",
    selectAndClick: "Select a meal type and click the button",
    language: "Language",
  },
  es: {
    title: "Selector de comida",
    selectMealType: "Selecciona tipo de comida",
    breakfast: "Desayuno",
    lunch: "Almuerzo",
    dinner: "Cena",
    chooseForMe: "Elige por mí",
    yourHealthyMeal: "Tu comida saludable:",
    selectAndClick: "Selecciona un tipo de comida y haz clic en el botón",
    language: "Idioma",
  },
};

const meals: { [key: string]: { typeOfMeal: string; meal: string }[] } = {
  en: [
    { typeOfMeal: "breakfast", meal: "Spinach and mushroom omelette" },
    {
      typeOfMeal: "breakfast",
      meal: "Overnight oats with chia seeds and berries",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Whole grain toast with avocado and poached eggs",
    },
    { typeOfMeal: "lunch", meal: "Quinoa and roasted vegetable bowl" },
    { typeOfMeal: "lunch", meal: "Grilled chicken and mixed greens salad" },
    {
      typeOfMeal: "lunch",
      meal: "Lentil and vegetable soup with whole grain bread",
    },
    {
      typeOfMeal: "dinner",
      meal: "Baked salmon with steamed broccoli and sweet potato",
    },
    {
      typeOfMeal: "dinner",
      meal: "Stir-fried tofu with mixed vegetables and brown rice",
    },
    {
      typeOfMeal: "dinner",
      meal: "Grilled lean steak with roasted Brussels sprouts",
    },
    { typeOfMeal: "breakfast", meal: "Avocado toast with poached eggs" },
    {
      typeOfMeal: "breakfast",
      meal: "Greek yogurt parfait with granola and berries",
    },
    { typeOfMeal: "breakfast", meal: "Spinach and mushroom omelette" },
    { typeOfMeal: "breakfast", meal: "Whole grain pancakes with maple syrup" },
    {
      typeOfMeal: "breakfast",
      meal: "Breakfast burrito with eggs, beans, and salsa",
    },
    { typeOfMeal: "breakfast", meal: "Smoked salmon bagel with cream cheese" },
    {
      typeOfMeal: "breakfast",
      meal: "Chia seed pudding with mango and coconut",
    },
    { typeOfMeal: "breakfast", meal: "Vegetable frittata with goat cheese" },
    {
      typeOfMeal: "breakfast",
      meal: "Whole grain waffles with fresh strawberries",
    },
    { typeOfMeal: "breakfast", meal: "Banana and peanut butter smoothie bowl" },
    { typeOfMeal: "breakfast", meal: "Huevos rancheros with refried beans" },
    {
      typeOfMeal: "breakfast",
      meal: "Overnight oats with almond milk and cinnamon",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Breakfast quinoa with nuts and dried fruits",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Whole grain toast with almond butter and banana",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Shakshuka (eggs poached in tomato sauce)",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Breakfast sandwich with egg, cheese, and avocado",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Acai bowl with granola and fresh fruits",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Steel-cut oatmeal with apples and walnuts",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Tofu scramble with spinach and cherry tomatoes",
    },
    { typeOfMeal: "breakfast", meal: "Whole grain muffins with blueberries" },

    // Lunch
    { typeOfMeal: "lunch", meal: "Grilled chicken Caesar salad" },
    { typeOfMeal: "lunch", meal: "Quinoa and roasted vegetable bowl" },
    { typeOfMeal: "lunch", meal: "Tuna salad sandwich on whole grain bread" },
    { typeOfMeal: "lunch", meal: "Lentil soup with crusty whole grain bread" },
    { typeOfMeal: "lunch", meal: "Turkey and avocado wrap" },
    {
      typeOfMeal: "lunch",
      meal: "Caprese sandwich with fresh mozzarella and tomato",
    },
    { typeOfMeal: "lunch", meal: "Greek salad with grilled chicken" },
    { typeOfMeal: "lunch", meal: "Vegetable sushi rolls with miso soup" },
    { typeOfMeal: "lunch", meal: "Spinach and feta quiche" },
    {
      typeOfMeal: "lunch",
      meal: "Chickpea and vegetable curry with brown rice",
    },
    { typeOfMeal: "lunch", meal: "Grilled vegetable and hummus wrap" },
    { typeOfMeal: "lunch", meal: "Cobb salad with grilled chicken" },
    {
      typeOfMeal: "lunch",
      meal: "Tomato basil soup with grilled cheese sandwich",
    },
    { typeOfMeal: "lunch", meal: "Falafel pita with tahini sauce" },
    { typeOfMeal: "lunch", meal: "Shrimp and avocado salad" },
    { typeOfMeal: "lunch", meal: "Vegetable minestrone soup" },
    { typeOfMeal: "lunch", meal: "Grilled salmon with mixed green salad" },
    {
      typeOfMeal: "lunch",
      meal: "Buffalo chicken wrap with celery and carrot sticks",
    },
    { typeOfMeal: "lunch", meal: "Egg salad on whole grain toast" },
    {
      typeOfMeal: "lunch",
      meal: "Stuffed bell peppers with quinoa and black beans",
    },

    // Dinner
    { typeOfMeal: "dinner", meal: "Grilled salmon with roasted asparagus" },
    { typeOfMeal: "dinner", meal: "Chicken stir-fry with mixed vegetables" },
    { typeOfMeal: "dinner", meal: "Vegetarian lasagna with side salad" },
    {
      typeOfMeal: "dinner",
      meal: "Baked cod with quinoa and steamed broccoli",
    },
    {
      typeOfMeal: "dinner",
      meal: "Beef and vegetable kebabs with tzatziki sauce",
    },
    { typeOfMeal: "dinner", meal: "Eggplant parmesan with whole wheat pasta" },
    { typeOfMeal: "dinner", meal: "Grilled tofu with stir-fried vegetables" },
    { typeOfMeal: "dinner", meal: "Turkey meatballs with zucchini noodles" },
    {
      typeOfMeal: "dinner",
      meal: "Baked chicken breast with sweet potato mash",
    },
    { typeOfMeal: "dinner", meal: "Shrimp scampi with whole grain linguine" },
    { typeOfMeal: "dinner", meal: "Vegetable and bean burrito bowl" },
    {
      typeOfMeal: "dinner",
      meal: "Grilled lean steak with roasted Brussels sprouts",
    },
    { typeOfMeal: "dinner", meal: "Baked stuffed portobello mushrooms" },
    {
      typeOfMeal: "dinner",
      meal: "Lemon herb roasted chicken with roasted vegetables",
    },
    { typeOfMeal: "dinner", meal: "Pesto salmon with roasted cherry tomatoes" },
    { typeOfMeal: "dinner", meal: "Vegetarian chili with cornbread" },
    { typeOfMeal: "dinner", meal: "Grilled pork tenderloin with apple sauce" },
    { typeOfMeal: "dinner", meal: "Baked falafel with tahini sauce and pita" },
    { typeOfMeal: "dinner", meal: "Turkey and vegetable soup" },
    { typeOfMeal: "dinner", meal: "Grilled vegetable and halloumi skewers" },
  ],
  es: [
    { typeOfMeal: "breakfast", meal: "Tortilla de espinacas y champiñones" },
    { typeOfMeal: "breakfast", meal: "Avena con semillas de chía y bayas" },
    {
      typeOfMeal: "breakfast",
      meal: "Tostada integral con aguacate y huevos pochados",
    },
    { typeOfMeal: "lunch", meal: "Bol de quinoa y vegetales asados" },
    {
      typeOfMeal: "lunch",
      meal: "Ensalada de pollo a la parrilla y vegetales mixtos",
    },
    {
      typeOfMeal: "lunch",
      meal: "Sopa de lentejas y verduras con pan integral",
    },
    {
      typeOfMeal: "dinner",
      meal: "Salmón al horno con brócoli al vapor y batata",
    },
    {
      typeOfMeal: "dinner",
      meal: "Tofu salteado con verduras mixtas y arroz integral",
    },
    {
      typeOfMeal: "dinner",
      meal: "Filete magro a la parrilla con coles de Bruselas asadas",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Tostadas de aguacate con huevos pochados",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Parfait de yogur griego con granola y bayas",
    },
    { typeOfMeal: "breakfast", meal: "Tortilla de espinacas y champiñones" },
    {
      typeOfMeal: "breakfast",
      meal: "Panqueques integrales con sirope de arce",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Burrito de desayuno con huevos, frijoles y salsa",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Bagel de salmón ahumado con queso crema",
    },
    { typeOfMeal: "breakfast", meal: "Pudín de chía con mango y coco" },
    {
      typeOfMeal: "breakfast",
      meal: "Frittata de vegetales con queso de cabra",
    },
    { typeOfMeal: "breakfast", meal: "Gofres integrales con fresas frescas" },
    {
      typeOfMeal: "breakfast",
      meal: "Batido de plátano y mantequilla de cacahuete en bol",
    },
    { typeOfMeal: "breakfast", meal: "Huevos rancheros con frijoles refritos" },
    {
      typeOfMeal: "breakfast",
      meal: "Avena remojada con leche de almendras y canela",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Quinoa de desayuno con nueces y frutas secas",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Tostada integral con mantequilla de almendras y plátano",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Shakshuka (huevos pochados en salsa de tomate)",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Sándwich de desayuno con huevo, queso y aguacate",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Bol de acai con granola y frutas frescas",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Avena de cocción lenta con manzanas y nueces",
    },
    {
      typeOfMeal: "breakfast",
      meal: "Revuelto de tofu con espinacas y tomates cherry",
    },
    { typeOfMeal: "breakfast", meal: "Muffins integrales con arándanos" },

    // Almuerzo
    { typeOfMeal: "lunch", meal: "Ensalada César con pollo a la parrilla" },
    { typeOfMeal: "lunch", meal: "Bol de quinoa y vegetales asados" },
    {
      typeOfMeal: "lunch",
      meal: "Sándwich de ensalada de atún en pan integral",
    },
    {
      typeOfMeal: "lunch",
      meal: "Sopa de lentejas con pan integral crujiente",
    },
    { typeOfMeal: "lunch", meal: "Wrap de pavo y aguacate" },
    {
      typeOfMeal: "lunch",
      meal: "Sándwich Caprese con mozzarella fresca y tomate",
    },
    { typeOfMeal: "lunch", meal: "Ensalada griega con pollo a la parrilla" },
    {
      typeOfMeal: "lunch",
      meal: "Rollos de sushi de vegetales con sopa de miso",
    },
    { typeOfMeal: "lunch", meal: "Quiche de espinacas y feta" },
    {
      typeOfMeal: "lunch",
      meal: "Curry de garbanzos y vegetales con arroz integral",
    },
    { typeOfMeal: "lunch", meal: "Wrap de vegetales a la parrilla y hummus" },
    { typeOfMeal: "lunch", meal: "Ensalada Cobb con pollo a la parrilla" },
    {
      typeOfMeal: "lunch",
      meal: "Sopa de tomate y albahaca con sándwich de queso a la plancha",
    },
    { typeOfMeal: "lunch", meal: "Pita de falafel con salsa de tahini" },
    { typeOfMeal: "lunch", meal: "Ensalada de camarones y aguacate" },
    { typeOfMeal: "lunch", meal: "Sopa minestrone de vegetales" },
    { typeOfMeal: "lunch", meal: "Salmón a la parrilla con ensalada mixta" },
    {
      typeOfMeal: "lunch",
      meal: "Wrap de pollo búfalo con palitos de apio y zanahoria",
    },
    { typeOfMeal: "lunch", meal: "Ensalada de huevo en tostada integral" },
    {
      typeOfMeal: "lunch",
      meal: "Pimientos rellenos con quinoa y frijoles negros",
    },

    // Cena
    {
      typeOfMeal: "dinner",
      meal: "Salmón a la parrilla con espárragos asados",
    },
    { typeOfMeal: "dinner", meal: "Salteado de pollo con vegetales mixtos" },
    { typeOfMeal: "dinner", meal: "Lasaña vegetariana con ensalada" },
    {
      typeOfMeal: "dinner",
      meal: "Bacalao al horno con quinoa y brócoli al vapor",
    },
    {
      typeOfMeal: "dinner",
      meal: "Brochetas de carne y vegetales con salsa tzatziki",
    },
    { typeOfMeal: "dinner", meal: "Parmesana de berenjena con pasta integral" },
    {
      typeOfMeal: "dinner",
      meal: "Tofu a la parrilla con vegetales salteados",
    },
    {
      typeOfMeal: "dinner",
      meal: "Albóndigas de pavo con fideos de calabacín",
    },
    {
      typeOfMeal: "dinner",
      meal: "Pechuga de pollo al horno con puré de batata",
    },
    { typeOfMeal: "dinner", meal: "Scampi de camarones con linguine integral" },
    { typeOfMeal: "dinner", meal: "Bol de burrito vegetariano con frijoles" },
    {
      typeOfMeal: "dinner",
      meal: "Filete magro a la parrilla con coles de Bruselas asadas",
    },
    { typeOfMeal: "dinner", meal: "Champiñones portobello rellenos al horno" },
    {
      typeOfMeal: "dinner",
      meal: "Pollo asado con hierbas y limón y vegetales asados",
    },
    { typeOfMeal: "dinner", meal: "Salmón al pesto con tomates cherry asados" },
    { typeOfMeal: "dinner", meal: "Chili vegetariano con pan de maíz" },
    {
      typeOfMeal: "dinner",
      meal: "Lomo de cerdo a la parrilla con salsa de manzana",
    },
    {
      typeOfMeal: "dinner",
      meal: "Falafel al horno con salsa de tahini y pita",
    },
    { typeOfMeal: "dinner", meal: "Sopa de pavo y vegetales" },
    {
      typeOfMeal: "dinner",
      meal: "Brochetas de vegetales y halloumi a la parrilla",
    },
  ],
};

const MealPicker = () => {
  const [selectedMealType, setSelectedMealType] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">("es");

  const handleSelectMeal = () => {
    if (!selectedMealType) return;

    setIsAnimating(true);
    const filteredMeals = meals[language].filter(
      (meal) => meal.typeOfMeal === selectedMealType
    );
    const randomMeal =
      filteredMeals[Math.floor(Math.random() * filteredMeals.length)];

    setTimeout(() => {
      setSelectedMeal(randomMeal.meal);
      setIsAnimating(false);
    }, 1000);
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-800">{t.title}</h1>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "es")}
              className="p-2 border border-green-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-green-700 pr-8"
            >
              <option value="en">Eng</option>
              <option value="es">Esp</option>
            </select>
            <Globe
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500"
              size={18}
            />
          </div>
        </div>

        <div className="relative mb-6">
          <select
            value={selectedMealType}
            onChange={(e) => setSelectedMealType(e.target.value)}
            className="w-full p-3 border border-green-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-green-700"
          >
            <option value="">{t.selectMealType}</option>
            <option value="breakfast">{t.breakfast}</option>
            <option value="lunch">{t.lunch}</option>
            <option value="dinner">{t.dinner}</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
        </div>

        <button
          onClick={handleSelectMeal}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
        >
          <Utensils className="mr-2" />
          {t.chooseForMe}
        </button>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-2 text-green-700">
            {t.yourHealthyMeal}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isAnimating ? 0 : 1, y: isAnimating ? -20 : 0 }}
            transition={{ duration: 0.5 }}
            className="bg-green-50 p-4 rounded-md"
          >
            {selectedMeal ? (
              <p className="text-lg font-medium text-green-800">
                {selectedMeal}
              </p>
            ) : (
              <p className="text-green-600">{t.selectAndClick}</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MealPicker;
