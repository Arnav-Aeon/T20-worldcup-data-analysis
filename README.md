# **T20 Cricket Team Selection Report**

## **Project Description**

This project involves creating a Power BI report to identify the top 11 players for a T20 cricket team based on performance metrics.

---

## **Dataset Information**

- **Source:** [ESPNcricinfo - ICC Men's T20 World Cup 2022-23 Records](https://www.espncricinfo.com/records/tournament/team-match-results/icc-men-s-t20-world-cup-2022-23-14450).
- **Data Extraction:** Utilized Brightdata tool for web scraping.
- **Key Metrics:** Batting average, bowling economy, strike rate, fielding performance, and more.

---

## **Features**

- Interactive Power BI report for player ranking and comparison.
- Visualizations including player performance charts and detailed metrics.
- Filtering options to analyze specific players or teams.

## **Data Analysis**

- The team comprises of players from different categories
- Players from each categories are selected based upon certain metrics
  a. Openers (2 players) : These players will be placed in the opening innings and they will be the power hitters of the team.
  1.Avg. score in an innings > 30
  2.Strike Rate > 140
  3.No. Innings Batted > 3
  4.%runs in boundaries > 50
  5.Batting position < 4
  b. Anchors (3 players) : Players who wont be expected to boundaries instead these players will have a better batting average and will be batting for longer times.
  1.Avg. runs scored in an innings > 40
  2.Strike Rate > 125
  3.No. of Innings Batted > 3
  4.Avg. balls faced > 20
  5.Batting Position > 2
  c. Finisher/Lower Order Anchors (1 player) : These players will bat aggresively to chase the target and they may as well bowl. However more stress is made on the batting capabilities.
  1.Avg runs scored in an inning > 25
  2.Strike rate > 130
  3.Innings Batted > 3
  4.Avg. Balls Faced > 12
  5.Batting Position > 4
  6.Innings Bowled > 1
  d. All Rounder/Lower Order (2 players) : They will hit runs as well as bowl.
  1.Batting Avg. > 15
  2.Strike Rate > 140
  3.Innings Batted > 2
  4.Batting Position > 4
  5.Innings Bowled > 2
  6.Average runs allowed per over < 7
  7.Average no. of balls required to take a wicket (Bowling Strike Rate) < 20
  e. Specialist Fast Bowlers (3 players) :
  1.Innings Bowled > 4
  2.Bowling Economy < 7
  3.Average no. of balls required to take a wicket (Bowling Strike Rate) < 20
  4.No of runs allowed per wicket (Bowling Avg) < 20
  5.Dot Ball% > 40

## **Final Dashboard**

![Dashboard1](https://drive.google.com/file/d/19OO1Kz7DX6-yqj7spfWTDALVUei8RG9_/view?usp=sharing)
![Dashboard2](https://drive.google.com/file/d/1JPnXFNuoujLTqp_boPqo_U20tuzt02K7/view?usp=sharing)
