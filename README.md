Deployment Link: <br>
<a href=""> Week 2 Contest </a>

<h2> Project Overview </h2>
Objective: <br>
To create a website for a restaurant that includes 5 functions to handle various tasks such as getting the menu, taking orders, order preparation, payment, and displaying a thank you message. <br>

<strong> Function 1: getMenu() <strong> <br>
This function will fetch the food items from an API and display them to the user when the screen loads. <br>
API URL: https://free-food-menus-api-production.up.railway.app/burgers <br>

Steps: <br>

Call the API using the fetch() method. <br>
Parse the JSON response. <br>
Display the food items to the user. <br>

<strong> Function 2: takeOrder() </strong> <br>
This function will simulate the user placing an order. It will randomly select 3 burgers, add them to an object, and then return a Promise that resolves after 2500 milliseconds. <br>

Steps: <br>

Create a Promise. <br>
Use a setTimeout() function to wait for 2500 milliseconds. <br>
Select 3 burgers randomly. <br>
Add the burgers to an object. <br>
Resolve the Promise with the object. <br>

<strong> Function 3: orderPrep() </strong> <br>
This function will simulate the order preparation process. It will return a Promise that resolves after 1500 milliseconds with the object {order_status:true, paid:false}. <br>

Steps: <br>

Create a Promise. <br>
Use a setTimeout() function to wait for 1500 milliseconds. <br>
Create an object with the order status and payment status. <br>
Resolve the Promise with the object. <br>

<strong> Function 4: payOrder() </strong> <br>
This function will simulate the payment process. It will return a Promise that resolves after 1000 milliseconds with the object {order_status:true, paid:true}. <br>

Steps: <br>

Create a Promise. <br>
Use a setTimeout() function to wait for 1000 milliseconds. <br>
Create an object with the order status and payment status. <br>
Resolve the Promise with the object. <br>
Function 5: thankyouFnc() <br>
This function will display a thank you message once the payment is received. It will be called after the payOrder() function is resolved and the paid status is true. <br>

Steps: <br>

Display a thank you message using an alert() function. <br>
Marking Scheme: <br>
getMenu() function: 15 marks <br>
takeOrder() function: 20 marks <br>
orderPrep() function: 15 marks <br>
payOrder() function: 20 marks <br>
thankyouFnc() function: 20 marks <br>
Deployment : 10 marks <br>
Total: 100 marks 