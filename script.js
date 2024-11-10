// Global arrays for countries and cities
const countries = [
    { name: 'United States', zodiac: 'Monkey' },
    { name: 'Haiti', zodiac: 'Rat' },
    { name: 'Mexico', zodiac: 'Horse' },
    { name: 'Brazil', zodiac: 'Horse' },
    { name: 'Belgium', zodiac: 'Tiger' },
    { name: 'Canada', zodiac: 'Rabbit' },
    { name: 'Germany', zodiac: 'Pig' },
    { name: 'Australia', zodiac: 'Ox' },
    { name: 'Norway', zodiac: 'Snake' },
    { name: 'Finland', zodiac: 'Snake' },
    { name: 'Poland', zodiac: 'Horse' },
    { name: 'Ireland', zodiac: 'Dog' },
    { name: 'Soviet Union (former)', zodiac: 'Dog' },
    { name: 'Turkey', zodiac: 'Pig' },
    { name: 'Saudi Arabia', zodiac: 'Monkey' },
    { name: 'Iceland', zodiac: 'Monkey' },
    { name: 'Syria', zodiac: 'Dog' },
    { name: 'India', zodiac: 'Pig' },
    { name: 'Israel', zodiac: 'Rat' },
    { name: 'People\'s Republic of China', zodiac: 'Ox' },
    { name: 'Libya', zodiac: 'Rabbit' },
    { name: 'Sudan', zodiac: 'Monkey' },
    { name: 'Ghana', zodiac: 'Rooster' },
    { name: 'Malaysia', zodiac: 'Rooster' },
    { name: 'Guinea', zodiac: 'Dog' },
    { name: 'Burkina Faso', zodiac: 'Rat' },
    { name: 'Nigeria', zodiac: 'Rat' },
    { name: 'Kuwait', zodiac: 'Ox' },
    { name: 'Tanzania', zodiac: 'Ox' },
    { name: 'Jamaica', zodiac: 'Tiger' },
    { name: 'Algeria', zodiac: 'Tiger' },
    { name: 'Uganda', zodiac: 'Tiger' },
    { name: 'Kenya', zodiac: 'Rabbit' },
    { name: 'Singapore', zodiac: 'Snake' },
    { name: 'Barbados', zodiac: 'Horse' },
    { name: 'Botswana', zodiac: 'Horse' },
    { name: 'Lesotho', zodiac: 'Horse' },
    { name: 'Bangladesh', zodiac: 'Pig' },
    { name: 'United Arab Emirates', zodiac: 'Pig' },
    { name: 'Bahrain', zodiac: 'Pig' },
    { name: 'Qatar', zodiac: 'Pig' },
    { name: 'Angola', zodiac: 'Rabbit' },
    { name: 'Papua New Guinea', zodiac: 'Rabbit' },
    { name: 'Seychelles', zodiac: 'Dragon' },
    { name: 'Vietnam', zodiac: 'Dragon' },
    { name: 'Djibouti', zodiac: 'Snake' },
    { name: 'Solomon Islands', zodiac: 'Horse' },
    { name: 'Dominica', zodiac: 'Horse' },
    { name: 'Saint Lucia', zodiac: 'Goat' },
    { name: 'Zimbabwe', zodiac: 'Monkey' },
    { name: 'Antigua and Barbuda', zodiac: 'Rooster' },
    { name: 'Belize', zodiac: 'Rooster' },
    { name: 'Namibia', zodiac: 'Horse' },
    { name: 'Lithuania', zodiac: 'Horse' },
    { name: 'Georgia', zodiac: 'Goat' },
    { name: 'Ukraine', zodiac: 'Goat' },
    { name: 'Czech Republic', zodiac: 'Rooster' },
    { name: 'Slovakia', zodiac: 'Rooster' },
    { name: 'Eritrea', zodiac: 'Rooster' },
    { name: 'Palau', zodiac: 'Dog' },
    { name: 'East Timor', zodiac: 'Horse' },
    { name: 'Montenegro', zodiac: 'Dog' },
    { name: 'Kosovo', zodiac: 'Rat' },
    { name: 'South Sudan', zodiac: 'Rabbit' }
];

const cities = [
    { name: 'New York City', country: 'USA', zodiac: 'Wood Rat', foundingYear: 1624 },
    { name: 'Los Angeles', country: 'USA', zodiac: 'Ox', foundingYear: 1781 },
    { name: 'Chicago', country: 'USA', zodiac: 'Water Snake', foundingYear: 1833 },
    { name: 'Houston', country: 'USA', zodiac: 'Monkey', foundingYear: 1836 },
    { name: 'Phoenix', country: 'USA', zodiac: 'Fire Rabbit', foundingYear: 1867 },
    { name: 'Philadelphia', country: 'USA', zodiac: 'Water Dog', foundingYear: 1682 },
    { name: 'San Antonio', country: 'USA', zodiac: 'Earth Horse', foundingYear: 1718 },
    { name: 'San Diego', country: 'USA', zodiac: 'Ox', foundingYear: 1769 },
    { name: 'Dallas', country: 'USA', zodiac: 'Metal Snake', foundingYear: 1841 },
    { name: 'San Jose', country: 'USA', zodiac: 'Ox', foundingYear: 1777 },
    { name: 'São Paulo', country: 'Brazil', zodiac: 'Wood Tiger', foundingYear: 1554 },
    { name: 'Mexico City', country: 'Mexico', zodiac: 'Ox', foundingYear: 1325 },
    { name: 'Tokyo', country: 'Japan', zodiac: 'Rabbit', foundingYear: 1457 },
    { name: 'Delhi', country: 'India', zodiac: 'Rat', foundingYear: 1911 },
    { name: 'Shanghai', country: 'China', zodiac: 'Rabbit', foundingYear: 1291 },
    { name: 'Mumbai', country: 'India', zodiac: 'Rabbit', foundingYear: 1661 },
    { name: 'Beijing', country: 'China', zodiac: 'N/A', foundingYear: -1045 },
    { name: 'Osaka', country: 'Japan', zodiac: 'Snake', foundingYear: 1889 },
    { name: 'Cairo', country: 'Egypt', zodiac: 'Snake', foundingYear: 969 },
    { name: 'London', country: 'UK', zodiac: 'Rabbit', foundingYear: 43 },
    { name: 'Boston', country: 'USA', zodiac: 'Metal Horse', foundingYear: 1630 },
    { name: 'New Orleans', country: 'USA', zodiac: 'Earth Horse', foundingYear: 1718 },
    { name: 'San Francisco', country: 'USA', zodiac: 'Fire Rat', foundingYear: 1776 },
    { name: 'Baltimore', country: 'USA', zodiac: 'Earth Rooster', foundingYear: 1729 },
    { name: 'Charleston', country: 'USA', zodiac: 'Metal Dog', foundingYear: 1670 },
    { name: 'Detroit', country: 'USA', zodiac: 'Metal Rooster', foundingYear: 1701 },
    { name: 'Savannah', country: 'USA', zodiac: 'Water Ox', foundingYear: 1733 },
    { name: 'Seattle', country: 'USA', zodiac: 'Metal Pig', foundingYear: 1851 },
    { name: 'Denver', country: 'USA', zodiac: 'Earth Horse', foundingYear: 1858 },
    { name: 'Minneapolis', country: 'USA', zodiac: 'Fire Rabbit', foundingYear: 1867 },
    { name: 'St. Louis', country: 'USA', zodiac: 'Wood Monkey', foundingYear: 1764 },
    { name: 'Pittsburgh', country: 'USA', zodiac: 'Earth Tiger', foundingYear: 1758 },
    { name: 'Cincinnati', country: 'USA', zodiac: 'Earth Rat', foundingYear: 1788 },
    { name: 'Milwaukee', country: 'USA', zodiac: 'Fire Horse', foundingYear: 1846 },
    { name: 'Washington, D.C.', country: 'USA', zodiac: 'Metal Horse', foundingYear: 1790 },
    { name: 'Rome', country: 'Italy', zodiac: 'Wood Ox', foundingYear: -753 },
    { name: 'Paris', country: 'France', zodiac: 'Metal Snake', foundingYear: -3 },
    { name: 'Moscow', country: 'Russia', zodiac: 'Fire Pig', foundingYear: 1147 },
    { name: 'Rio de Janeiro', country: 'Brazil', zodiac: 'Wood Rabbit', foundingYear: 1565 },
    { name: 'Kolkata', country: 'India', zodiac: 'Metal Horse', foundingYear: 1690 },
    { name: 'Sydney', country: 'Australia', zodiac: 'Earth Rat', foundingYear: 1788 },
    { name: 'Toronto', country: 'Canada', zodiac: 'Water Ox', foundingYear: 1793 },
    { name: 'Istanbul', country: 'Turkey', zodiac: 'Metal Dog', foundingYear: -660 },
    { name: 'Vienna', country: 'Austria', zodiac: 'Wood Rabbit', foundingYear: -15 },
    { name: 'Berlin', country: 'Germany', zodiac: 'Fire Rooster', foundingYear: 1237 },
    { name: 'Madrid', country: 'Spain', zodiac: 'Wood Rooster', foundingYear: 865 },
    { name: 'Amsterdam', country: 'Netherlands', zodiac: 'Wood Pig', foundingYear: 1275 },
    { name: 'Stockholm', country: 'Sweden', zodiac: 'Water Rat', foundingYear: 1252 },
    { name: 'Munich', country: 'Germany', zodiac: 'Fire Dog', foundingYear: 1158 }
];

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('astrology-form');
    const resultsSection = document.getElementById('results');

    form.addEventListener('submit', handleFormSubmission);
});

function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Calculating...';

    try {
        const birthdateInput = document.getElementById('birthdate').value;
        const [year, month, day] = birthdateInput.split('-').map(Number);
        
        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        if (!year || !month || !day || !name || !city || !country) {
            throw new Error('Please fill in all fields with valid information');
        }

        const results = performCalculations(year, month, day, name, city, country);
        displayResults(results);
        populateNumerologyResults(results);  // Add this line

        document.getElementById('results').style.display = 'block';
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Get Astrology Reading';
    }
}

function performCalculations(year, month, day, name, city, country) {
    const sunSign = getSunSign(month, day);
    const chineseZodiac = getChineseZodiac(year);
    const lifePathNumber = calculateLifePath(year, month, day);
    const expressionNumber = calculateExpressionNumber(name);
    const soulUrgeNumber = calculateSoulUrgeNumber(name);
    const birthDayNumber = calculateBirthDayNumber(year, month, day);
    const personalYear = calculatePersonalYear(year, month, day);
    const personalityNumber = calculatePersonalityNumber(name);
    const subconsciousSelfNumber = calculateSubconsciousSelfNumber(name);
    const challengeNumbers = calculateChallengeNumbers(year, month, day);
    const pinnacleNumbers = calculatePinnacleNumbers(year, month, day);
    const balanceNumber = calculateBalanceNumber(name);
    const karmicDebt = getKarmicDebtNumber(year, month, day);
    const gematria = calculateGematria(name);
    const forecast = generateForecast(chineseZodiac.animal);
    const locationCompatibility = calculateLocationCompatibility(city, country, chineseZodiac.animal);

    const venusSign = getPlanetSign(year, month, day, "Venus");
    const marsSign = getPlanetSign(year, month, day, "Mars");
    const mercurySign = getPlanetSign(year, month, day, "Mercury");

    const elementsBalance = getElementsBalance(sunSign, venusSign, marsSign, mercurySign);
    const modalitiesBalance = getModalitiesBalance(sunSign, venusSign, marsSign, mercurySign);

    const lifePathCompatibility = getLifePathCompatibility(lifePathNumber);

    return {
        sunSign,
        sunSignDescription: getSunSignDescription(sunSign),
        chineseZodiac,
        chineseZodiacDescription: getChineseZodiacDescription(chineseZodiac),
        lifePathNumber,
        personalYearNumber: personalYear.personalYearNumber,
        personalYearStartDate: personalYear.startDate,
        personalYearEndDate: personalYear.endDate,
        lifePathDescription: getLifePathDescription(lifePathNumber),
        expressionNumber,
        expressionDescription: getExpressionNumberDescription(expressionNumber),
        soulUrgeNumber,
        soulUrgeDescription: getSoulUrgeNumberDescription(soulUrgeNumber),
        birthDayNumber,
        birthDayNumberDescription: getBirthDayNumberDescription(birthDayNumber),
        personalYearNumberDescription: getPersonalYearNumberDescription(personalYear.personalYearNumber),
        personalityNumber,
        personalityNumberDescription: getPersonalityNumberDescription(personalityNumber),
        subconsciousSelfNumber,
        subconsciousSelfNumberDescription: getSubconsciousSelfNumberDescription(subconsciousSelfNumber),
        challengeNumbers,
        challengeNumbersDescription: getChallengeNumbersDescription(challengeNumbers),
        pinnacleNumbers,
        pinnacleNumbersDescription: getPinnacleNumbersDescription(pinnacleNumbers),
        balanceNumber,
        balanceNumberDescription: getBalanceNumberDescription(balanceNumber),
        karmicDebt,
        karmicDebtDescription: getKarmicDebtDescription(karmicDebt),
        gematria,
        forecast,
        locationCompatibility,
        venusSign,
        venusDescription: getPlanetaryDescription("venus", venusSign),
        marsSign,
        marsDescription: getPlanetaryDescription("mars", marsSign),
        mercurySign,
        mercuryDescription: getPlanetaryDescription("mercury", mercurySign),
        elementsDescription: describeElementsBalance(elementsBalance),
        modalitiesDescription: describeModalitiesBalance(modalitiesBalance),
        lifePathCompatibility
    };
}

function getSunSign(month, day) {
    const signs = [
        { name: "Capricorn", start: [1, 1], end: [1, 19] },
        { name: "Aquarius", start: [1, 20], end: [2, 18] },
        { name: "Pisces", start: [2, 19], end: [3, 20] },
        { name: "Aries", start: [3, 21], end: [4, 19] },
        { name: "Taurus", start: [4, 20], end: [5, 20] },
        { name: "Gemini", start: [5, 21], end: [6, 20] },
        { name: "Cancer", start: [6, 21], end: [7, 22] },
        { name: "Leo", start: [7, 23], end: [8, 22] },
        { name: "Virgo", start: [8, 23], end: [9, 22] },
        { name: "Libra", start: [9, 23], end: [10, 22] },
        { name: "Scorpio", start: [10, 23], end: [11, 21] },
        { name: "Sagittarius", start: [11, 22], end: [12, 21] },
        { name: "Capricorn", start: [12, 22], end: [12, 31] }
    ];

    for (let sign of signs) {
        if ((month === sign.start[0] && day >= sign.start[1]) || 
            (month === sign.end[0] && day <= sign.end[1])) {
            return sign.name;
        }
    }
    return "Unknown";
}

function getChineseZodiac(year) {
    const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
    
    const animalIndex = (year - 4) % 12;
    const elementIndex = Math.floor((year - 4) % 10 / 2);

    return {
        animal: animals[animalIndex],
        element: elements[elementIndex]
    };
}

function calculateLifePath(year, month, day) {
    console.log(`Calculating Life Path for: ${year}-${month}-${day}`);

    // Helper function to sum digits of a number
    const sumDigits = (num) => {
        const sum = num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        console.log(`  Summing digits of ${num}: ${sum}`);
        return sum;
    };
    
    // Validate input types
    if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
        console.error("Error: Inputs must be integers.");
        throw new Error("Inputs must be integers.");
    }
    
    // Validate date
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        console.error("Error: Invalid date.");
        throw new Error("Invalid date.");
    }
    
    console.log("Initial calculations:");
    const daySum = sumDigits(day);
    const monthSum = sumDigits(month);
    const yearSum = sumDigits(year);
    
    let sum = daySum + monthSum + yearSum;
    console.log(`Total sum: ${daySum} + ${monthSum} + ${yearSum} = ${sum}`);
    
    // Reduce sum to single digit or master number
    console.log("Reducing sum:");
    while (sum > 9 && ![11, 22, 33].includes(sum)) {
        console.log(`  Current sum: ${sum}`);
        sum = sumDigits(sum);
    }
    
    console.log(`Final Life Path Number: ${sum}`);
    return sum;
}

function calculateExpressionNumber(name) {
    const letterValues = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    let sum = 0;
    for (let char of name.toUpperCase().replace(/[^A-Z]/g, '')) {
        sum += letterValues[char] || 0;
    }

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    return sum;
}

function calculateBirthDayNumber(year, month, day) {
    // No need to create a Date object
    if (day > 31 || day < 1) {
        throw new Error("Invalid day of month. Day should be between 1 and 31.");
    } else if (day === 11 || day === 22) {
        return day;
    } else if (day > 9) {
        day = day.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        if (day > 9) {
            day = day.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
    }
    return day;
}

function calculateSoulUrgeNumber(name) {
    const vowels = 'AEIOU';
    let sum = 0;
    for (let char of name.toUpperCase()) {
        if (vowels.includes(char)) {
            sum += letterToNumber(char);
        }
    }
    return reduceToSingleDigit(sum);
}

function calculatePersonalYear(year, month, day) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
    const currentDay = currentDate.getDate();

    let personalYear = currentYear;

    // If current date is before the birthday this year, use last year
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        personalYear--;
    }

    const monthDaySum = reduceToSingleDigit(month + day);
    const yearSum = reduceToSingleDigit(personalYear);
    const personalYearNumber = reduceToSingleDigit(monthDaySum + yearSum);

    return {
        personalYearNumber,
        startDate: new Date(personalYear, month - 1, day),
        endDate: new Date(personalYear + 1, month - 1, day - 1)
    };
}

function reduceToSingleDigit(num) {
    while (num > 9) {
        num = String(num).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}

function calculatePersonalityNumber(name) {
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
    let sum = 0;
    for (let char of name.toUpperCase()) {
        if (consonants.includes(char)) {
            sum += letterToNumber(char);
        }
    }
    return reduceToSingleDigit(sum);
}

function calculateSubconsciousSelfNumber(name) {
    return reduceToSingleDigit(calculateExpressionNumber(name) + calculateSoulUrgeNumber(name));
}

function calculateChallengeNumbers(year, month, day) {
    const c1 = Math.abs(month - day);
    const c2 = Math.abs(year - (month + day));
    const c3 = Math.abs(c1 - c2);
    const c4 = Math.abs(month - year);

    return [c1, c2, c3, c4].map(num => reduceToSingleDigit(num));
}

function calculatePinnacleNumbers(year, month, day) {
    const p1 = reduceToSingleDigit(month + day);
    const p2 = reduceToSingleDigit(day + year);
    const p3 = reduceToSingleDigit(p1 + p2);
    const p4 = reduceToSingleDigit(month + year);

    return [p1, p2, p3, p4];
}

function calculateBalanceNumber(name) {
    const firstInitial = name.split(' ')[0][0].toUpperCase();
    return letterToNumber(firstInitial);
}

function calculateGematria(name) {
    const standard = calculateStandard(name);
    const ordinal = calculateOrdinal(name);
    const reduced = calculateReduced(name);

    return { standard, ordinal, reduced };
}

function calculateStandard(input) {
    return input.toUpperCase().split('').reduce((sum, char) => {
        const value = char.charCodeAt(0) - 64;
        return sum + (value > 0 && value < 27 ? value : 0);
    }, 0);
}

function calculateOrdinal(input) {
    return input.toLowerCase().split('').reduce((sum, char) => {
        const value = char.charCodeAt(0) - 96;
        return sum + (value > 0 && value < 27 ? value : 0);
    }, 0);
}

function calculateReduced(input) {
    return input.toUpperCase().split('').reduce((sum, char) => {
        let value = char.charCodeAt(0) - 64;
        if (value > 0 && value < 27) {
            value = value % 9 || 9;
        } else {
            value = 0;
        }
        return sum + value;
    }, 0);
}

function generateForecast(userZodiac) {
    const currentYear = new Date().getFullYear();
    const forecast = [];

    for (let i = 0; i < 10; i++) {
        const year = currentYear + i;
        const yearZodiac = getChineseZodiacDetails(year);
        const relationship = getZodiacRelationship(userZodiac, yearZodiac.animal);
        forecast.push({ year, zodiac: yearZodiac, relationship });
    }

    return forecast;
}

function calculateLocationCompatibility(city, country, userZodiac) {
    const cityData = cities.find(c => c.name === city);
    const countryData = countries.find(c => c.name === country);

    const cityRelationship = cityData ? getZodiacRelationship(userZodiac, cityData.zodiac) : "Unknown";
    const countryRelationship = countryData ? getZodiacRelationship(userZodiac, countryData.zodiac) : "Unknown";

    const optimalCities = cities.filter(c => getZodiacRelationship(userZodiac, c.zodiac) === "auspicious").map(c => c.name);
    const optimalCountries = countries.filter(c => getZodiacRelationship(userZodiac, c.zodiac) === "auspicious").map(c => c.name);
    
    // New: Add cautious cities and countries
    const cautiousCities = cities.filter(c => getZodiacRelationship(userZodiac, c.zodiac) === "cautious").map(c => c.name);
    const cautiousCountries = countries.filter(c => getZodiacRelationship(userZodiac, c.zodiac) === "cautious").map(c => c.name);

    return {
        cityZodiac: cityData ? cityData.zodiac : "Unknown",
        cityRelationship,
        countryZodiac: countryData ? countryData.zodiac : "Unknown",
        countryRelationship,
        optimalCities: optimalCities.join(", "),
        optimalCountries: optimalCountries.join(", "),
        cautiousCities: cautiousCities.join(", "),  // New
        cautiousCountries: cautiousCountries.join(", ")  // New
    };
}

function getZodiacRelationship(userSign, yearSign) { 
    const relationships = {
        "Rat": { auspicious: ["Ox", "Dragon", "Monkey"], cautious: ["Horse", "Goat", "Rabbit"] },
        "Ox": { auspicious: ["Rat", "Snake", "Rooster"], cautious: ["Tiger", "Dragon", "Horse"] },
        "Tiger": { auspicious: ["Horse", "Dog", "Pig"], cautious: ["Ox", "Snake", "Monkey"] },
        "Rabbit": { auspicious: ["Goat", "Dog", "Pig"], cautious: ["Rat", "Snake", "Rooster"] },
        "Dragon": { auspicious: ["Rat", "Dragon", "Monkey", "Rooster"], cautious: ["Ox", "Dog", "Rabbit"] },
        "Snake": { auspicious: ["Ox", "Rooster"], cautious: ["Tiger", "Pig"] },
        "Horse": { auspicious: ["Tiger", "Goat", "Dog"], cautious: ["Rat", "Ox", "Rooster"] },
        "Goat": { auspicious: ["Rabbit", "Horse", "Pig"], cautious: ["Rat", "Ox", "Dog"] },
        "Monkey": { auspicious: ["Rat", "Dragon", "Snake"], cautious: ["Tiger", "Pig"] },
        "Rooster": { auspicious: ["Ox", "Snake", "Dragon"], cautious: ["Rat", "Rabbit", "Dog"] },
        "Dog": { auspicious: ["Tiger", "Rabbit", "Horse"], cautious: ["Ox", "Dragon", "Goat"] },
        "Pig": { auspicious: ["Tiger", "Rabbit", "Goat"], cautious: ["Snake", "Monkey"] }
    };

    if (relationships[userSign].auspicious.includes(yearSign)) return "auspicious";
    if (relationships[userSign].cautious.includes(yearSign)) return "cautious";
    return "neutral";
}

function getChineseZodiacDetails(year) {
    const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    const elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
    const polarities = ["Yang", "Yin"];

    const animalIndex = (year - 4) % 12;
    const elementIndex = Math.floor((year - 4) % 10 / 2);
    const polarityIndex = (year - 4) % 2;

    return {
        animal: animals[animalIndex],
        element: elements[elementIndex],
        polarity: polarities[polarityIndex]
    };
}

function getPlanetSign(year, month, day, planet) {
    // This is a placeholder function. In a real application, you would need to use 
    // astronomical calculations or an ephemeris to determine the exact position of planets.
    // For demonstration purposes, we'll use a simplified method that's slightly more 
    // realistic than the previous version, but still not accurate for real astrological use.

    const baseDate = new Date(year, month - 1, day);
    const planetSpeeds = {
        "Sun": 1,
        "Mercury": 0.24,
        "Venus": 0.62,
        "Mars": 1.88,
        "Jupiter": 11.86,
        "Saturn": 29.46
    };

    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
                   "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

    const daysSinceEpoch = Math.floor((baseDate.getTime() - new Date(1970, 0, 1).getTime()) / (1000 * 60 * 60 * 24));
    const planetPosition = Math.floor(daysSinceEpoch / (planetSpeeds[planet] * 30)) % 12;

    return signs[planetPosition];
}

function getElementsBalance(sunSign, venusSign, marsSign, mercurySign) {
    const elements = {
        "Fire": ["Aries", "Leo", "Sagittarius"],
        "Earth": ["Taurus", "Virgo", "Capricorn"],
        "Air": ["Gemini", "Libra", "Aquarius"],
        "Water": ["Cancer", "Scorpio", "Pisces"]
    };
    return [sunSign, venusSign, marsSign, mercurySign].reduce((balance, sign) => {
        for (let [element, signs] of Object.entries(elements)) {
            if (signs.includes(sign)) balance[element]++;
        }
        return balance;
    }, { "Fire": 0, "Earth": 0, "Air": 0, "Water": 0 });
}

function getModalitiesBalance(sunSign, venusSign, marsSign, mercurySign) {
    const modalities = {
        "Cardinal": ["Aries", "Cancer", "Libra", "Capricorn"],
        "Fixed": ["Taurus", "Leo", "Scorpio", "Aquarius"],
        "Mutable": ["Gemini", "Virgo", "Sagittarius", "Pisces"]
    };
    return [sunSign, venusSign, marsSign, mercurySign].reduce((balance, sign) => {
        for (let [modality, signs] of Object.entries(modalities)) {
            if (signs.includes(sign)) balance[modality]++;
        }
        return balance;
    }, { "Cardinal": 0, "Fixed": 0, "Mutable": 0 });
}

function getKarmicDebtNumber(year, month, day) {
    const karmicDebtNumbers = [13, 14, 16, 19];
    
    let sum = month + day + year.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    
    if (karmicDebtNumbers.includes(sum)) {
        return sum;
    }
    
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
        if (karmicDebtNumbers.includes(sum)) {
            return sum;
        }
    }
    
    return null;
}

function letterToNumber(letter) {
    const letterValues = new Map([
        ['A', 1], ['B', 2], ['C', 3], ['D', 4], ['E', 5], ['F', 6], ['G', 7], ['H', 8], ['I', 9],
        ['J', 1], ['K', 2], ['L', 3], ['M', 4], ['N', 5], ['O', 6], ['P', 7], ['Q', 8], ['R', 9],
        ['S', 1], ['T', 2], ['U', 3], ['V', 4], ['W', 5], ['X', 6], ['Y', 7], ['Z', 8]
    ]);
    return letterValues.get(letter.toUpperCase()) || 0;
}

function reduceToSingleDigit(num) {
    if (num === 11 || num === 22 || num === 33) {
        return num;
    }
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return num;
}

// Description functions
function getSunSignDescription(sign) {
    const descriptions = {
        "Aries": "Aries is a fire sign known for its boldness and leadership. You're energetic, courageous, and often the first to start new ventures.",
        "Taurus": "Taurus is an earth sign associated with stability and sensuality. You're patient, reliable, and have a strong appreciation for beauty and comfort.",
        "Gemini": "Gemini is an air sign characterized by duality and communication. You're witty, versatile, and always curious to learn new things.",
        "Cancer": "Cancer is a water sign known for its emotional depth and nurturing nature. You're intuitive, protective, and deeply connected to home and family.",
        "Leo": "Leo is a fire sign associated with creativity and self-expression. You're confident, charismatic, and natural-born leaders.",
        "Virgo": "Virgo is an earth sign known for its analytical mind and attention to detail. You're practical, hardworking, and always striving for perfection.",
        "Libra": "Libra is an air sign associated with balance and harmony. You're diplomatic, charming, and have a strong sense of justice.",
        "Scorpio": "Scorpio is a water sign known for its intensity and passion. You're resourceful, brave, and have a magnetic personality.",
        "Sagittarius": "Sagittarius is a fire sign characterized by its love for adventure and philosophy. You're optimistic, honest, and always seeking to expand your horizons.",
        "Capricorn": "Capricorn is an earth sign known for its ambition and discipline. You're responsible, patient, and have a strong drive to achieve your goals.",
        "Aquarius": "Aquarius is an air sign associated with innovation and humanitarianism. You're original, independent, and often ahead of your time.",
        "Pisces": "Pisces is a water sign known for its imagination and empathy. You're intuitive, compassionate, and have a deep connection to the spiritual world."
    };
    return descriptions[sign] || "Description not available.";
}

function getChineseZodiacDescription(zodiac) {
    const { element, animal } = zodiac;
    const animalDescriptions = {
        "Rat": "Quick-witted, resourceful, and versatile. Kind, but sometimes seen as manipulative and greedy.",
        "Ox": "Diligent, dependable, and determined. Honest and earnest, but can be stubborn and poor at communication.",
        "Tiger": "Brave, confident, and charismatic. Enthusiastic and generous, but can be aggressive and short-tempered.",
        "Rabbit": "Gentle, quiet, and elegant. Kind and responsible, but might be a bit superficial and overly-discreet.",
        "Dragon": "Powerful, charismatic, and lucky. Energetic and warm-hearted, but can be arrogant and impatient.",
        "Snake": "Enigmatic, intuitive, and wise. Humorous and sophisticated, but can be jealous and suspicious.",
        "Horse": "Energetic, independent, and noble. Warm-hearted and enthusiastic, but can be impatient and hot-blooded.",
        "Goat": "Gentle, compassionate, and peaceful. Creative and honest, but can be indecisive and pessimistic.",
        "Monkey": "Witty, intelligent, and magnetic. Curious and playful, but can be mischievous and disrespectful.",
        "Rooster": "Observant, hardworking, and courageous. Talented and honest, but can be arrogant and critical.",
        "Dog": "Loyal, honest, and amiable. Kind and cautious, but can be temperamental and critical.",
        "Pig": "Diligent, compassionate, and generous. Optimistic and honest, but can be naive and short-tempered."
    };

    const elementDescriptions = {
        "Wood": "Wood signs are creative, imaginative, and idealistic. They're often compassionate and have a strong sense of social responsibility.",
        "Fire": "Fire signs are dynamic, passionate, and energetic. They're natural leaders with strong drive and determination.",
        "Earth": "Earth signs are practical, reliable, and stable. They're grounded individuals who value security and tradition.",
        "Metal": "Metal signs are strong, independent, and ambitious. They're often self-reliant and have a strong sense of justice.",
        "Water": "Water signs are intuitive, empathetic, and adaptable. They're often deeply emotional and have strong interpersonal skills."
    };

    return `${element} ${animal}: ${animalDescriptions[animal]} As a ${element} sign, ${elementDescriptions[element].toLowerCase()}`;
}

function getLifePathDescription(number) {
    const descriptions = {
        1: "Life Path 1 is the path of the leader. You are independent, creative, and a strong individual. You have the potential to achieve great things and inspire others.",
        2: "Life Path 2 is the path of the peacemaker. You are diplomatic, cooperative, and sensitive. Your strength lies in your ability to bring people together and create harmony.",
        3: "Life Path 3 is the path of the creative. You are expressive, optimistic, and have a great zest for life. Your creativity and charm can light up any room.",
        4: "Life Path 4 is the path of the builder. You are practical, hardworking, and have a strong sense of order. Your dedication and reliability make you a cornerstone in any endeavor.",
        5: "Life Path 5 is the path of the freedom seeker. You are adventurous, versatile, and progressive. Your adaptability and curiosity lead you to exciting experiences.",
        6: "Life Path 6 is the path of the nurturer. You are responsible, caring, and have a deep love for home and family. Your compassion makes you a source of comfort for others.",
        7: "Life Path 7 is the path of the seeker. You are analytical, introspective, and have a deep spiritual side. Your quest for knowledge leads to profound insights.",
        8: "Life Path 8 is the path of the powerhouse. You are ambitious, confident, and have great potential for success in the material world. Your drive can lead to significant achievements.",
        9: "Life Path 9 is the path of the humanitarian. You are compassionate, generous, and have a global perspective. Your empathy can make a real difference in the world.",
        11: "Life Path 11 is a master number representing intuition and spiritual insight. You are inspirational, highly sensitive, and possess a strong sense of purpose.",
        22: "Life Path 22 is a master number known as the Master Builder. You have the potential to turn dreams into reality on a large scale, with leadership and vision.",
        33: "Life Path 33 is a rare master number of the Master Teacher. You have a great capacity for love, understanding, and compassion, with a focus on raising human consciousness."
    };
    return descriptions[number] || "Invalid Life Path number";
}

function getExpressionNumberDescription(number) {
    const descriptions = {
        1: "You are a natural leader with strong individuality and creativity.",
        2: "You excel in partnerships and have a diplomatic, cooperative nature.",
        3: "You have a gift for self-expression, creativity, and communication.",
        4: "You are practical, reliable, and have excellent organizational skills.",
        5: "You are versatile, adventurous, and crave freedom and change.",
        6: "You are nurturing, responsible, and have a strong sense of harmony.",
        7: "You have a deep, analytical mind and a strong spiritual inclination.",
        8: "You have great potential for success in business and material realms.",
        9: "You are humanitarian, idealistic, and have a global consciousness.",
        11: "As a master number, you have high intuition and spiritual insight.",
        22: "As a master number, you have the potential to be a master builder.",
        33: "As a master number, you have great spiritual understanding and compassion."
    };
    return descriptions[number] || "Invalid Expression Number";
}

function getSoulUrgeNumberDescription(number) {
    const descriptions = {
        1: "You desire to be a leader and pioneer new paths.",
        2: "You seek harmony, balance, and cooperation in your life.",
        3: "You have a deep need for creativity and self-expression.",
        4: "You yearn for stability, order, and to build lasting foundations.",
        5: "You crave freedom, variety, and new experiences.",
        6: "You have a strong desire to nurture and care for others.",
        7: "You seek knowledge, understanding, and spiritual growth.",
        8: "You aspire to achieve material success and personal power.",
        9: "You have a deep wish to serve humanity and make a difference.",
        11: "You have a strong intuition and aspire to spiritual enlightenment.",
        22: "You dream of building something of lasting value for humanity.",
        33: "You aspire to become a spiritual teacher or healer for the world."
    };
    return descriptions[number] || "Invalid Soul Urge Number";
}

function getBirthDayNumberDescription(number) {
    const descriptions = {
        1: "You have natural leadership abilities and strong individuality.",
        2: "You excel in partnerships and have a diplomatic nature.",
        3: "You have a gift for self-expression and creativity.",
        4: "You are practical, reliable, and have excellent organizational skills.",
        5: "You are versatile, adventurous, and crave freedom.",
        6: "You are nurturing, responsible, and have a strong sense of harmony.",
        7: "You have a deep, analytical mind and spiritual inclination.",
        8: "You have great potential for success in business and material realms.",
        9: "You are humanitarian, idealistic, and have a global consciousness.",
        10: "You are independent, original, and have leadership potential.",
        11: "You have high intuition and spiritual insight.",
        12: "You have a strong sense of duty and the ability to achieve great things.",
        13: "You have the power to manifest your desires through hard work and determination.",
        14: "You bring new and unconventional ideas to the world.",
        15: "You have a magnetic personality and the ability to overcome obstacles.",
        16: "You have the potential for spiritual awakening and transformation.",
        17: "You have a highly developed analytical mind and spiritual awareness.",
        18: "You have the ability to achieve material success and help others.",
        19: "You are independent and have strong leadership qualities.",
        20: "You are sensitive, intuitive, and cooperative.",
        21: "You have the potential for success through your creativity and self-expression.",
        22: "You have the capacity to be a master builder, turning dreams into reality.",
        23: "You have a unique creative expression and the ability to inspire others.",
        24: "You have a practical approach to life and the ability to build solid foundations.",
        25: "You have a quick mind and the ability to adapt to change.",
        26: "You have a nurturing nature and the ability to create harmony.",
        27: "You have a deep, intuitive understanding of spiritual matters.",
        28: "You have natural leadership abilities and the potential for material success.",
        29: "You have a humanitarian outlook and the ability to make a global impact.",
        30: "You have creative talents and the ability to express yourself effectively.",
        31: "You have innovative ideas and the ability to lead others."
    };
    return descriptions[number] || "Invalid Birth Day Number";
}

function getPersonalYearNumberDescription(number) {
    const descriptions = {
        1: "A year of new beginnings and opportunities. Take initiative and start fresh projects.",
        2: "A year for partnerships and cooperation. Focus on relationships and diplomacy.",
        3: "A year for creativity and self-expression. Enjoy social activities and communication.",
        4: "A year for building solid foundations. Focus on practical matters and organization.",
        5: "A year of change and adventure. Embrace new experiences and be adaptable.",
        6: "A year for home, family, and responsibilities. Focus on nurturing and harmony.",
        7: "A year for introspection and spiritual growth. Seek knowledge and understanding.",
        8: "A year for material success and power. Focus on business and financial matters.",
        9: "A year of completion and humanitarianism. Let go of the old and serve others.",
    };
    return descriptions[number] || "Invalid Personal Year Number";
}

function getPersonalityNumberDescription(number) {
    const descriptions = {
        1: "You appear confident, independent, and original to others.",
        2: "Others see you as cooperative, diplomatic, and sensitive.",
        3: "You come across as expressive, charming, and sociable.",
        4: "Others perceive you as reliable, practical, and hard-working.",
        5: "You appear adventurous, versatile, and progressive to others.",
        6: "Others see you as responsible, nurturing, and harmonious.",
        7: "You come across as analytical, introspective, and mysterious.",
        8: "Others perceive you as ambitious, confident, and authoritative.",
        9: "You appear compassionate, idealistic, and sophisticated to others.",
        11: "Others see you as inspiring, intuitive, and idealistic.",
        22: "You come across as visionary, practical, and capable of great achievements."
    };
    return descriptions[number] || "Invalid Personality Number";
}

function getSubconsciousSelfNumberDescription(number) {
    const descriptions = {
        1: "Your inner self is independent and creative.",
        2: "Your inner self is cooperative and sensitive.",
        3: "Your inner self is expressive and joyful.",
        4: "Your inner self is practical and organized.",
        5: "Your inner self is adventurous and freedom-loving.",
        6: "Your inner self is responsible and nurturing.",
        7: "Your inner self is analytical and spiritual.",
        8: "Your inner self is ambitious and powerful.",
        9: "Your inner self is compassionate and idealistic.",
        11: "Your inner self is highly intuitive and inspirational.",
        22: "Your inner self has the potential for great achievements."
    };
    return descriptions[number] || "Invalid Subconscious Self Number";
}

function getChallengeNumbersDescription(numbers) {
    const descriptions = {
        0: "You face no significant obstacles in this area of your life.",
        1: "You need to develop independence and overcome self-doubt.",
        2: "You must learn to cooperate with others and be more diplomatic.",
        3: "You need to express yourself more fully and overcome self-criticism.",
        4: "You must develop patience, perseverance, and practical skills.",
        5: "You need to embrace change and overcome fear of the unknown.",
        6: "You must learn to balance your responsibilities with self-care.",
        7: "You need to develop trust in your intuition and overcome skepticism.",
        8: "You need to learn to use power wisely and overcome material attachment."
    };
    return numbers.map((num, index) => `Challenge ${index + 1}: ${descriptions[num]}`).join('<br>');
}

function getPinnacleNumbersDescription(numbers) {
    const descriptions = {
        1: "A period of leadership, independence, and new beginnings.",
        2: "A time for cooperation, partnerships, and diplomacy.",
        3: "A phase of creativity, self-expression, and social growth.",
        4: "A period of building solid foundations and practical achievements.",
        5: "A time of change, freedom, and new experiences.",
        6: "A phase of responsibility, nurturing, and harmony.",
        7: "A period of spiritual growth, wisdom, and introspection.",
        8: "A time of material success, power, and authority.",
        9: "A phase of humanitarianism, completion, and universal love.",
        11: "A period of inspiration, intuition, and spiritual enlightenment.",
        22: "A time of major achievements, vision, and practical idealism."
    };
    return numbers.map((num, index) => `Pinnacle ${index + 1}: ${descriptions[num]}`).join('<br>');
}

function getBalanceNumberDescription(number) {
    const descriptions = {
        1: "In times of stress, assert your independence and take initiative.",
        2: "When facing challenges, seek cooperation and use diplomacy.",
        3: "To find balance, express yourself creatively and maintain optimism.",
        4: "During difficult times, focus on practical solutions and stay organized.",
        5: "To regain equilibrium, embrace change and seek new experiences.",
        6: "When stressed, focus on your responsibilities and create harmony.",
        7: "To find peace, seek solitude and engage in introspection.",
        8: "During challenges, focus on your goals and use your personal power wisely.",
        9: "To restore balance, practice compassion and think on a global scale."
    };
    return descriptions[number] || "Invalid Balance Number";
}

function getKarmicDebtDescription(number) {
    switch(number) {
        case 13: return "Karmic Debt 13 relates to laziness and selfishness in past lives. It requires hard work and selfless service to others.";
        case 14: return "Karmic Debt 14 indicates abuse of freedom in past lives. It requires learning self-control and using freedom responsibly.";
        case 16: return "Karmic Debt 16 relates to ego and failure to take responsibility in past lives. It requires learning humility and accepting consequences.";
        case 19: return "Karmic Debt 19 indicates abuse of power in past lives. It requires learning to use power and authority for the benefit of others.";
        default: return "No Karmic Debt";
    }
}

function analyzeGematriaValue(value, method) {
    const basicSymbolism = {
        1: "New beginnings, independence, individuality",
        2: "Balance, duality, partnership",
        3: "Creativity, expression, growth",
        4: "Stability, foundation, practicality",
        5: "Change, freedom, adventure",
        6: "Harmony, love, nurturing",
        7: "Spirituality, introspection, wisdom",
        8: "Power, abundance, success",
        9: "Completion, humanitarianism, spiritual enlightenment",
        11: "Intuition, spiritual insight, enlightenment",
        22: "Master builder, large-scale endeavors, material mastery",
        33: "Spiritual master, selfless service, higher consciousness"
    };

    let reducedValue = value;
    while (reducedValue > 9 && reducedValue !== 11 && reducedValue !== 22 && reducedValue !== 33) {
        reducedValue = String(reducedValue).split('').reduce((a, b) => Number(a) + Number(b), 0);
    }

    let analysis = `Original value: ${value}. `;
    if (value !== reducedValue) {
        analysis += `Reduces to: ${reducedValue}. `;
    }

    if (reducedValue in basicSymbolism) {
        analysis += `${basicSymbolism[reducedValue]}. `;
    }

    switch (method) {
        case 'Standard (Ordinal)':
            analysis += "This represents the core essence or external expression. ";
            break;
        case 'Ordinal':
            analysis += "This reflects the practical or mundane aspects of the name or word. ";
            break;
        case 'Reduction':
            analysis += "This reveals hidden talents or internal motivations. ";
            break;
    }

    if (reducedValue === 11 || reducedValue === 22 || reducedValue === 33) {
        analysis += "This is a Master Number. ";
        switch (reducedValue) {
            case 11:
                analysis += "It signifies intuition, spiritual insight, and enlightenment. ";
                break;
            case 22:
                analysis += "It represents the master builder, capable of turning dreams into reality. ";
                break;
            case 33:
                analysis += "It embodies the master teacher, focusing on spiritual upliftment of humanity. ";
                break;
        }
    }

    return analysis;
}

function describeElementsBalance(balance) {
    const total = balance.Fire + balance.Earth + balance.Air + balance.Water;
    let description = "Your elements balance: ";

    if (total === 0) {
        return "No element information available.";
    }

    const strongestElement = Object.entries(balance).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    const percentages = {
        Fire: Math.round((balance.Fire / total) * 100),
        Earth: Math.round((balance.Earth / total) * 100),
        Air: Math.round((balance.Air / total) * 100),
        Water: Math.round((balance.Water / total) * 100)
    };

    description += `Fire ${percentages.Fire}%, Earth ${percentages.Earth}%, Air ${percentages.Air}%, Water ${percentages.Water}%. `;

    if (Math.max(...Object.values(percentages)) >= 50) {
        description += `You have a strong ${strongestElement} element. `;
        switch (strongestElement) {
            case 'Fire':
                description += "You're likely to be energetic, passionate, and action-oriented.";
                break;
            case 'Earth':
                description += "You're likely to be practical, grounded, and focused on material concerns.";
                break;
            case 'Air':
                description += "You're likely to be intellectual, communicative, and focused on ideas.";
                break;
            case 'Water':
                description += "You're likely to be emotional, intuitive, and empathetic.";
                break;
        }
    } else {
        description += "Your elements are fairly balanced, indicating a well-rounded nature that can draw upon different elemental strengths.";
    }

    return description;
}

function describeModalitiesBalance(balance) {
    const total = balance.Cardinal + balance.Fixed + balance.Mutable;
    let description = "Your modalities balance: ";

    if (total === 0) {
        return "No modality information available.";
    }

    const strongestModality = Object.entries(balance).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    const percentages = {
        Cardinal: Math.round((balance.Cardinal / total) * 100),
        Fixed: Math.round((balance.Fixed / total) * 100),
        Mutable: Math.round((balance.Mutable / total) * 100)
    };

    description += `Cardinal ${percentages.Cardinal}%, Fixed ${percentages.Fixed}%, Mutable ${percentages.Mutable}%. `;

    if (Math.max(...Object.values(percentages)) >= 50) {
        description += `You have a strong ${strongestModality} modality. `;
        switch (strongestModality) {
            case 'Cardinal':
                description += "You're likely to be proactive, ambitious, and good at starting new projects.";
                break;
            case 'Fixed':
                description += "You're likely to be stable, determined, and resistant to change.";
                break;
            case 'Mutable':
                description += "You're likely to be flexible, adaptable, and good at managing change.";
                break;
        }
    } else {
        description += "Your modalities are fairly balanced, indicating a versatile nature that can adapt to different situations.";
    }

    return description;
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const categories = [
        {
            title: "Western Astrology",
            content: `
                <p><strong>Sun Sign:</strong> ${results.sunSign}</p>
                <p>${results.sunSignDescription}</p>
                <p><strong>Venus Sign:</strong> ${results.venusSign}</p>
                <p>${results.venusDescription}</p>
                <p><strong>Mars Sign:</strong> ${results.marsSign}</p>
                <p>${results.marsDescription}</p>
                <p><strong>Mercury Sign:</strong> ${results.mercurySign}</p>
                <p>${results.mercuryDescription}</p>
            `
        },
        {
            title: "Chinese Astrology",
            content: `
                <p><strong>Chinese Zodiac:</strong> ${results.chineseZodiac.animal} (${results.chineseZodiac.element})</p>
                <p>${results.chineseZodiacDescription}</p>
            `
        },
        {
            title: "10 Year Outlook",
            content: `
                <div class="forecast-grid">
                    ${results.forecast.map(year => `
                        <div class="forecast-year ${year.relationship}">
                            <strong>${year.year}:</strong> ${year.zodiac.animal} (${year.zodiac.element} ${year.zodiac.polarity})
                            <span class="relationship-tag">${year.relationship}</span>
                        </div>
                    `).join('')}
                </div>
            `
        },
        {
            title: "Location Compatibility",
            content: `
                <h3>Country Compatibility</h3>
                <p><strong>Country Zodiac Sign:</strong> ${results.locationCompatibility.countryZodiac}</p>
                <p><strong>Compatibility:</strong> ${results.locationCompatibility.countryRelationship}</p>
                <p><strong>Auspicious Countries:</strong> ${results.locationCompatibility.optimalCountries}</p>
                <p><strong>Countries to be Cautious in:</strong> ${results.locationCompatibility.cautiousCountries}</p>
                
                <h3>City Compatibility</h3>
                <p><strong>City Zodiac Sign:</strong> ${results.locationCompatibility.cityZodiac}</p>
                <p><strong>Compatibility:</strong> ${results.locationCompatibility.cityRelationship}</p>
                <p><strong>Auspicious Cities:</strong> ${results.locationCompatibility.optimalCities}</p>
                <p><strong>Cities to be Cautious in:</strong> ${results.locationCompatibility.cautiousCities}</p>
            `
        },
        {
            title: "Numerology Results",
            content: `
                <p><strong>Life Path Number:</strong> ${results.lifePathNumber}</p>
                <p>${results.lifePathDescription}</p>
                <h3>Life Path Compatibility</h3>
                <table class="compatibility-table">
                    <tr>
                        <th>Compatible Numbers</th>
                        <th>Less Compatible Numbers</th>
                    </tr>
                    <tr>
                        <td>${results.lifePathCompatibility.compatible.join(', ')}</td>
                        <td>${results.lifePathCompatibility.lessCompatible.join(', ')}</td>
                    </tr>
                </table>
                <p><strong>Expression Number:</strong> ${results.expressionNumber}</p>
                <p>${results.expressionDescription}</p>
                <p><strong>Soul Urge Number:</strong> ${results.soulUrgeNumber}</p>
                <p>${results.soulUrgeDescription}</p>
                <p><strong>Birth Day Number:</strong> ${results.birthDayNumber}</p>
                <p>${results.birthDayNumberDescription}</p>
                <p><strong>Personal Year Number:</strong> ${results.personalYearNumber}</p>
                <p>${results.personalYearNumberDescription}</p>
                <p><strong>Personality Number:</strong> ${results.personalityNumber}</p>
                <p>${results.personalityNumberDescription}</p>
                <p><strong>Subconscious Self Number:</strong> ${results.subconsciousSelfNumber}</p>
                <p>${results.subconsciousSelfNumberDescription}</p>
                <p><strong>Challenge Numbers:</strong> ${results.challengeNumbers.join(', ')}</p>
                ${results.challengeNumbersDescription}
                <p><strong>Pinnacle Numbers:</strong> ${results.pinnacleNumbers.join(', ')}</p>
                ${results.pinnacleNumbersDescription}
                <p><strong>Balance Number:</strong> ${results.balanceNumber}</p>
                <p>${results.balanceNumberDescription}</p>
                ${results.karmicDebt ? `
                    <p><strong>Karmic Debt Number:</strong> ${results.karmicDebt}</p>
                    <p>${results.karmicDebtDescription}</p>
                ` : ''}
            `
        },
        {
            title: "Gematria Results",
            content: `
                <p><strong>Standard (Mispar Hechrachi):</strong> ${results.gematria.standard}</p>
                <p>${analyzeGematriaValue(results.gematria.standard, 'Standard (Ordinal)')}</p>
                <p><strong>Ordinal (Mispar Siduri):</strong> ${results.gematria.ordinal}</p>
                <p>${analyzeGematriaValue(results.gematria.ordinal, 'Ordinal')}</p>
                <p><strong>Reduced (Mispar Katan):</strong> ${results.gematria.reduced}</p>
                <p>${analyzeGematriaValue(results.gematria.reduced, 'Reduction')}</p>
            `
        },
        {
            title: "Elements and Modalities",
            content: `
                <p>${results.elementsDescription}</p>
                <p>${results.modalitiesDescription}</p>
            `
        }
    ];

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'result-category';
        categoryDiv.innerHTML = `
            <h2>${category.title}</h2>
            <div class="category-content">
                ${category.content}
            </div>
        `;
        resultsDiv.appendChild(categoryDiv);
    });

    resultsDiv.style.display = 'grid';

    // Adjust the height of each category after rendering
    const categoryElements = document.querySelectorAll('.result-category');
    categoryElements.forEach(category => {
        category.style.height = 'auto';
    });
}

// Additional helper functions

function getPlanetaryDescription(planet, sign) {
    const descriptions = {
        "sun": {
            "Aries": "Your core identity is energetic, pioneering, and confident.",
            "Taurus": "Your essence is grounded, patient, and appreciative of beauty.",
            "Gemini": "Your core self is communicative, versatile, and curious.",
            "Cancer": "Your identity is nurturing, protective, and emotionally intuitive.",
            "Leo": "Your essence is creative, charismatic, and naturally leadership-oriented.",
            "Virgo": "Your core self is analytical, practical, and detail-oriented.",
            "Libra": "Your identity centers on harmony, balance, and social relationships.",
            "Scorpio": "Your essence is intense, passionate, and transformative.",
            "Sagittarius": "Your core self is optimistic, philosophical, and adventure-seeking.",
            "Capricorn": "Your identity is ambitious, disciplined, and responsible.",
            "Aquarius": "Your essence is innovative, humanitarian, and independent.",
            "Pisces": "Your core self is intuitive, compassionate, and imaginative."
        },
        "venus": {
            "Aries": "You express love boldly and enjoy the thrill of new relationships.",
            "Taurus": "Your approach to love is sensual, loyal, and appreciative of beauty.",
            "Gemini": "You express affection through communication and intellectual connection.",
            "Cancer": "Your love is nurturing, protective, and emotionally deep.",
            "Leo": "You express love dramatically and enjoy grand romantic gestures.",
            "Virgo": "Your approach to love is practical, service-oriented, and detail-focused.",
            "Libra": "You seek harmony and balance in relationships and have a strong sense of fairness.",
            "Scorpio": "Your love is intense, passionate, and transformative.",
            "Sagittarius": "You seek adventure and growth in relationships and value freedom.",
            "Capricorn": "Your approach to love is mature, responsible, and goal-oriented.",
            "Aquarius": "You value uniqueness in relationships and may have unconventional views on love.",
            "Pisces": "Your love is dreamy, compassionate, and sometimes self-sacrificing."
        },
        "mars": {
            "Aries": "Your energy is assertive, courageous, and pioneering.",
            "Taurus": "Your actions are steady, determined, and resource-focused.",
            "Gemini": "Your energy is versatile, quick-thinking, and communicative.",
            "Cancer": "Your actions are protective, emotionally driven, and indirect.",
            "Leo": "Your energy is confident, dramatic, and leadership-oriented.",
            "Virgo": "Your actions are precise, analytical, and service-oriented.",
            "Libra": "Your energy is diplomatic, partnership-focused, and justice-seeking.",
            "Scorpio": "Your actions are intense, strategic, and transformative.",
            "Sagittarius": "Your energy is adventurous, optimistic, and expansive.",
            "Capricorn": "Your actions are disciplined, ambitious, and goal-oriented.",
            "Aquarius": "Your energy is innovative, humanitarian, and group-oriented.",
            "Pisces": "Your actions are intuitive, compassionate, and sometimes evasive."
        },
        "mercury": {
            "Aries": "Your thinking is quick, direct, and pioneering.",
            "Taurus": "Your mental processes are methodical, practical, and steady.",
            "Gemini": "Your communication style is versatile, witty, and curious.",
            "Cancer": "Your thoughts are influenced by emotions and intuition.",
            "Leo": "Your communication is confident, creative, and dramatic.",
            "Virgo": "Your thinking is analytical, precise, and detail-oriented.",
            "Libra": "Your mental approach is balanced, diplomatic, and aesthetic.",
            "Scorpio": "Your thoughts are deep, investigative, and sometimes secretive.",
            "Sagittarius": "Your thinking is optimistic, philosophical, and broad-minded.",
            "Capricorn": "Your mental processes are structured, disciplined, and goal-oriented.",
            "Aquarius": "Your thinking is innovative, original, and humanitarian.",
            "Pisces": "Your mental approach is intuitive, imaginative, and empathetic."
        }
    };

    return descriptions[planet][sign] || `Description not available for ${planet} in ${sign}.`;
}

function getLifePathCompatibility(lifePathNumber) {
    const compatibilityTable = {
        1: { compatible: [3, 5, 6], lessCompatible: [4, 7, 8] },
        2: { compatible: [4, 6, 8], lessCompatible: [1, 5, 9] },
        3: { compatible: [1, 5, 6], lessCompatible: [2, 4, 8] },
        4: { compatible: [1, 2, 8], lessCompatible: [3, 5, 7] },
        5: { compatible: [1, 3, 7], lessCompatible: [2, 4, 8] },
        6: { compatible: [2, 3, 9], lessCompatible: [1, 5, 7] },
        7: { compatible: [1, 5, 7], lessCompatible: [2, 6, 8] },
        8: { compatible: [2, 4, 6], lessCompatible: [3, 5, 7] },
        9: { compatible: [3, 6, 9], lessCompatible: [2, 4, 8] }
    };

    return compatibilityTable[lifePathNumber] || { compatible: [], lessCompatible: [] };
}

// This function would be called when the form is submitted
function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Calculating...';

    try {
        const birthdateInput = document.getElementById('birthdate').value;
        const [year, month, day] = birthdateInput.split('-').map(Number);
        
        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        if (!year || !month || !day || !name || !city || !country) {
            throw new Error('Please fill in all fields with valid information');
        }

        const results = performCalculations(year, month, day, name, city, country);
        displayResults(results);
        populateNumerologyResults(results);  // Add this line

        document.getElementById('results').style.display = 'block';
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Get Astrology Reading';
    }
}

// Assuming you have a function that populates the numerology results
function populateNumerologyResults(data) {
    console.log("Populating numerology results...");
    
    // Compatible Numbers
    document.getElementById('compatible-numbers').textContent = data.compatibleNumbers;
    console.log("Compatible Numbers:", data.compatibleNumbers);

    // Less Compatible Numbers
    document.getElementById('less-compatible-numbers').textContent = data.lessCompatibleNumbers;
    console.log("Less Compatible Numbers:", data.lessCompatibleNumbers);

    // Expression Number
    document.getElementById('expression-number').textContent = data.expressionNumber;
    console.log("Expression Number:", data.expressionNumber);
    document.getElementById('expression-description').textContent = "Your natural abilities and talents.";

    // Soul Urge Number
    document.getElementById('soul-urge-number').textContent = data.soulUrgeNumber;
    console.log("Soul Urge Number:", data.soulUrgeNumber);
    document.getElementById('soul-urge-description').textContent = "Your inner desires and motivations.";

    // Birth Day Number
    document.getElementById('birth-day-number').textContent = data.birthDayNumber;
    console.log("Birth Day Number:", data.birthDayNumber);
    document.getElementById('birth-day-description').textContent = "Special talents and abilities you possess.";

    // Personal Year Number
    document.getElementById('personal-year-number').textContent = data.personalYearNumber;
    console.log("Personal Year Number:", data.personalYearNumber);

    // Personality Number
    document.getElementById('personality-number').textContent = data.personalityNumber;
    console.log("Personality Number:", data.personalityNumber);
    document.getElementById('personality-description').textContent = "How others perceive you.";

    // Subconscious Self Number
    document.getElementById('subconscious-self-number').textContent = data.subconsciousSelfNumber;
    console.log("Subconscious Self Number:", data.subconsciousSelfNumber);

    // Challenge Numbers
    document.getElementById('challenge-numbers').textContent = data.challengeNumbers;
    console.log("Challenge Numbers:", data.challengeNumbers);

    // Life Path Number
    document.getElementById('life-path-number').textContent = data.lifePathNumber;
    console.log("Life Path Number:", data.lifePathNumber);
    
    console.log("Numerology results population complete.");
}