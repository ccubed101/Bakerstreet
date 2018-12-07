using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Diagnostics;

namespace Bakerstreet.Controllers
{
    [Route("api/[controller]")]
    public class RestaurantsController : Controller
    {
		[HttpGet("[action]")]
		public IEnumerable<Restaurant> RestaurantsPartial()
		{
			return restaurants.Where((restaurant) => { return restaurant.ForAuthenticatedUsersOnly == false; });
		}

		[HttpGet("[action]")]
		[Authorize]
		public IEnumerable<Restaurant> Restaurants()
		{
			return restaurants;
		}

		[HttpGet("[action]/id")]
		[Authorize]
		public Restaurant Restaurants(int id)
		{
			return restaurants.First((restaurant) => { return restaurant.Id == id; });
		}

		public class Restaurant
		{
			public int Id { get; set; }
			public string Name { get; set; }
			public string Address { get; set; }
			public string FoodType { get; set; }
			public bool ForAuthenticatedUsersOnly { get; set; }
			public ScheduleItem[] Schedule { get; set; }
		}

		public class ScheduleItem
		{
			public ScheduleItem(int id, string day, string hours)
			{
				Id = id;
				Day = day;
				Hours = hours;
			}

			public int Id { get; set; }
			public string Day { get; set; }
			public string Hours { get; set; }
		}

		private static Restaurant[] restaurants = new Restaurant[]
		{
			new Restaurant
			{
				Id = 1,
				Name = "Gloria's Latin Cuisine", 
				Address = "Firewheel Mall, 360 Coneflower Dr, Garland, TX 75040",
				FoodType = "Salvadoran and Tex-mex",
				ForAuthenticatedUsersOnly = false,
				Schedule = new ScheduleItem[]
				{
					new ScheduleItem(1, "Monday", "11AM–9PM"),
					new ScheduleItem(2, "Tuesday", "11AM–10PM"),
					new ScheduleItem(3, "Wednesday", "11AM–10PM"),
					new ScheduleItem(4, "Thursday", "11AM–10PM"),
					new ScheduleItem(5, "Friday", "11AM–10:30PM"),
					new ScheduleItem(6, "Saturday", "11AM–10:30PM"),
					new ScheduleItem(7, "Sunday", "11AM–9PM"),
				}
			},
			new Restaurant
			{
				Id = 2,
				Name = "Chestnut Cafe and Restaurant",
				Address = "605 Town Square Blvd, Garland, TX 75040",
				FoodType = "Comfort Food",
				ForAuthenticatedUsersOnly = true,
				Schedule = new ScheduleItem[] 
				{
					new ScheduleItem(1, "Monday", "10AM–7PM"),
					new ScheduleItem(2, "Tuesday", "10AM–7PM"),
					new ScheduleItem(3, "Wednesday", "10AM–7PM"),
					new ScheduleItem(4, "Thursday", "10AM–7PM"),
					new ScheduleItem(5, "Friday", "10AM–7PM"),
					new ScheduleItem(6, "Saturday", "10AM–7PM"),
					new ScheduleItem(7, "Sunday", "10AM–7PM"),
				}

			},
			new Restaurant
			{
				Id = 3,
				Name = "Fish City Grill",
				Address = "445 Coneflower Dr, Garland, TX 75040",
				FoodType = "Southern Style Seafood",
				ForAuthenticatedUsersOnly = false,
				Schedule = new ScheduleItem[]
				{
					new ScheduleItem(1, "Monday", "11AM–10PM"),
					new ScheduleItem(2, "Tuesday", "11AM–10PM"),
					new ScheduleItem(3, "Wednesday", "11AM–10PM"),
					new ScheduleItem(4, "Thursday", "11AM–10PM"),
					new ScheduleItem(5, "Friday", "11AM–11PM"),
					new ScheduleItem(6, "Saturday", "11AM–11PM"),
					new ScheduleItem(7, "Sunday", "11AM–9PM"),
				}
			},
			new Restaurant
			{
				Id = 4,
				Name = "Houlihan's",
				Address = "Garland Houlihan’s, 660 Town Center Blvd, Garland, TX 75040",
				FoodType = "Casual Fare",
				ForAuthenticatedUsersOnly = false,
				Schedule = new ScheduleItem[]
				{
					new ScheduleItem(1, "Monday", "11AM–11PM"),
					new ScheduleItem(2, "Tuesday", "11AM–11PM"),
					new ScheduleItem(3, "Wednesday", "11AM–11PM"),
					new ScheduleItem(4, "Thursday", "11AM–11PM"),
					new ScheduleItem(5, "Friday", "11AM–12AM"),
					new ScheduleItem(6, "Saturday", "11AM–12AM"),
					new ScheduleItem(7, "Sunday", "11AM–10PM"),
				}
			},
			new Restaurant
			{
				Id = 5,
				Name = "Genghis Grill",
				Address = "215 Coneflower Dr, Garland, TX 75040",
				FoodType = "Mongolian Stir-fry",
				ForAuthenticatedUsersOnly = false,
				Schedule = new ScheduleItem[]
				{
					new ScheduleItem(1, "Monday", "11AM–9PM"),
					new ScheduleItem(2, "Tuesday", "11AM–9PM"),
					new ScheduleItem(3, "Wednesday", "11AM–9PM"),
					new ScheduleItem(4, "Thursday", "11AM–10PM"),
					new ScheduleItem(5, "Friday", "11AM–11PM"),
					new ScheduleItem(6, "Saturday", "11AM–11PM"),
					new ScheduleItem(7, "Sunday", "11AM–9PM"),
				}
			},
			new Restaurant
			{
				Id = 6,
				Name = "In-N-Out Burger",
				Address = "150 Town Center Blvd, Garland, TX 75040",
				FoodType = "Fast Food",
				ForAuthenticatedUsersOnly = true,
				Schedule = new ScheduleItem[]
				{
					new ScheduleItem(1, "Monday", "10:30AM–1AM"),
					new ScheduleItem(2, "Tuesday", "10:30AM–1AM"),
					new ScheduleItem(3, "Wednesday", "10:30AM–1AM"),
					new ScheduleItem(4, "Thursday", "10:30AM–1AM"),
					new ScheduleItem(5, "Friday", "10:30AM–1:30AM"),
					new ScheduleItem(6, "Saturday", "10:30AM–1:30AM"),
					new ScheduleItem(7, "Sunday", "10:30AM–1AM"),
				}
			},
			new Restaurant
			{
				Id = 7,
				Name = "Razzoo's Cajun Cafe",
				Address = "Firewheel Town Center, 310 Coneflower Dr, Garland, TX 75040",
				FoodType = "New Orleans Inspired Fare",
				ForAuthenticatedUsersOnly = true,
				Schedule = new ScheduleItem[]
				{
					new ScheduleItem(1, "Monday", "11AM–11PM"),
					new ScheduleItem(2, "Tuesday", "11AM–11PM"),
					new ScheduleItem(3, "Wednesday", "11AM–11PM"),
					new ScheduleItem(4, "Thursday", "11AM–11PM"),
					new ScheduleItem(5, "Friday", "11AM–12AM"),
					new ScheduleItem(6, "Saturday", "11AM–12AM"),
					new ScheduleItem(7, "Sunday", "11AM–11PM"),
				}
			},
			new Restaurant
			{
				Id = 8,
				Name = "Foxiis Restaurant and Grill",
				Address = "365 Coneflower Dr, Garland, TX 75040",
				FoodType = "Comfort Food",
				ForAuthenticatedUsersOnly = false,
				Schedule = new ScheduleItem[]
				{
					new ScheduleItem(1, "Monday", "11AM–11PM"),
					new ScheduleItem(2, "Tuesday", "11AM–11PM"),
					new ScheduleItem(3, "Wednesday", "11AM–11PM"),
					new ScheduleItem(4, "Thursday", "11AM–11PM"),
					new ScheduleItem(5, "Friday", "11AM–12AM"),
					new ScheduleItem(6, "Saturday", "11AM–12AM"),
					new ScheduleItem(7, "Sunday", "11AM–10PM"),
				}
			},
			new Restaurant
			{
				Id = 9,
				Name = "Pete's Burgers, Wings and Drinks",
				Address = "695 Town Square Blvd, Garland, TX 75040",
				FoodType = "Burgers, pizza & other American grill favorites.",
				ForAuthenticatedUsersOnly = false,
				Schedule = new ScheduleItem[]
				{
					new ScheduleItem(1, "Monday", "11AM–12AM"),
					new ScheduleItem(2, "Tuesday", "11AM–12AM"),
					new ScheduleItem(3, "Wednesday", "11AM–1AM"),
					new ScheduleItem(4, "Thursday", "11AM–1AM"),
					new ScheduleItem(5, "Friday", "11AM–2AM"),
					new ScheduleItem(6, "Saturday", "11AM–2AM"),
					new ScheduleItem(7, "Sunday", "11AM–12AM"),
				}
			},
			new Restaurant
			{
				Id = 10,
				Name = "Ichi Sushi Grill and Lounge",
				Address = "690 Beebalm Ln, Garland, TX 75040",
				FoodType = "Sushi",
				ForAuthenticatedUsersOnly = true,
				Schedule = new ScheduleItem[]
				{
					new ScheduleItem(1, "Monday", "11AM–9PM"),
					new ScheduleItem(2, "Tuesday", "11AM–9PM"),
					new ScheduleItem(3, "Wednesday", "11AM–9PM"),
					new ScheduleItem(4, "Thursday", "11AM–9PM"),
					new ScheduleItem(5, "Friday", "11AM–10PM"),
					new ScheduleItem(6, "Saturday", "11AM–10PM"),
					new ScheduleItem(7, "Sunday", "Closed"),
				}
			},
		};
	}
}