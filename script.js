let weather = prompt("What is the weather today?");
switch (weather) {
	case "sunny":
		alert(
			"It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream."
		);
		break;
	case "rainy":
		alert(
			"Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long. "
		);
		break;
	case "snowing":
		alert(
			"The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman"
		);
		break;
	case "overcast":
		alert(
			"It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a raincoat just in case."
		);
		break;
	default:
		alert("No fit");
}
