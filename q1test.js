

/**************************************************************

  web access to get the information
  
  https://studentweb.housing.queensu.ca/public/campusDishAPI/campusDishAPI.php?locationId=14627&mealPeriod=Lunch&selDate=1-21-2026

 ****************************************************************/

var res;

//query the campus food service API for information
fetch("https://studentweb.housing.queensu.ca/public/campusDishAPI/campusDishAPI.php?locationId=14627&mealPeriod=Dinner&selDate=1-22-2026")
   .then(function(result)
      {
	  if(!result.ok) throw new Error("HTTP error");
	  return result.json();
      })
	  
   .then(function(data)
      {
      displayData(data);
	  })
   .catch(function(error)
      {
	  console.log("Fetch error",error);
	  });


// ************************************************************
//
// function: displayData()
//
// Display the information from the API
// 
// ************************************************************
function displayData(res)
{
var i,j,k,m;

console.log(res);

for(m=0;m<res.MealPeriods.length;m++)
   {

	for(i=0;i<res.MealPeriods[m].Stations.length;i++)
	   {
	   console.log("Station-Name: ",res.MealPeriods[m].Stations[i].Name);
	   
	   for(j=0;j<res.MealPeriods[0].Stations[i].SubCategories.length;j++)
		  {
		  console.log("   SubStation-Name: ",res.MealPeriods[m].Stations[i].SubCategories[j].Name);
		  
		  for(k=0;k<res.MealPeriods[0].Stations[i].SubCategories[j].Items.length;k++)
			{
			console.log("   Product: ",res.MealPeriods[m].Stations[i].SubCategories[j].Items[k].ProductName);
			};
		  };
	   };
	   
   };
}
