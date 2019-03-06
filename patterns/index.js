const patternDict = [
  {
    pattern: "\\b(?<greeting>Hi|Hello|Hey)\\b",
    intent: "Hello"
  },
  {
    pattern: "\\b(bye|exit)\\b",
    intent: "Exit"
  },
  {
    pattern: "like\\sin\\s\\b(?<city>.+)",
    intent: "CurrentWeather"
  },
  {
    pattern: "\\b(?<city>.+)\\b",
    intent: "CurrentWeatherShortened"
  },
  {
    pattern: "\\b(?<help>Help|help|HELP)\\b",
    intent: "Help"
  },
  {
    pattern:
      "\\b(?<weather>rain|rainy|sunny|cloudy|snow|thunderstorms|windy|drizzle)\\b(?<city>[a-z]+[ a-z]+?)\\b(?<time>day\\stomorrow|tomorrow|today)$",
    intent: "WeatherForecast"
  },
  {
    pattern:
      "\\b(?<weather>rain|rainy|sunny|cloudy|snow|thunderstorms|windy|drizzle)\\b\\s\\b(?<time>day\\safter\\stomorrow|tomorrow|today)\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)$",
    intent: "WeatherForecast"
  }
];

module.exports = patternDict;
