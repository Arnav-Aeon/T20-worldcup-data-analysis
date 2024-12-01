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

---

1. Openers (2 players) : These players will be placed in the opening innings and they will be the power hitters of the team.
   - Avg. score in an innings > 30
   - Strike Rate > 140
   - No. Innings Batted > 3
   - %runs in boundaries > 50
   - Batting position < 4

---

2. Anchors (3 players) : Players who wont be expected to boundaries instead these players will have a better batting average and will be batting for longer times.
   - Avg. runs scored in an innings > 40
   - Strike Rate > 125
   - No. of Innings Batted > 3
   - Avg. balls faced > 20
   - Batting Position > 2

---

3. Finisher/Lower Order Anchors (1 player) : These players will bat aggresively to chase the target and they may as well bowl. However more stress is made on the batting capabilities.
   - Avg runs scored in an inning > 25
   - Strike rate > 130
   - Innings Batted > 3
   - Avg. Balls Faced > 12
   - Batting Position > 4
   - Innings Bowled > 1

---

4. All Rounder/Lower Order (2 players) : They will hit runs as well as bowl.
   - Batting Avg. > 15
   - Strike Rate > 140
   - Innings Batted > 2
   - Batting Position > 4
   - Innings Bowled > 2
   - Average runs allowed per over < 7
   - Average no. of balls required to take a wicket (Bowling Strike Rate) < 20

---

5. Specialist Fast Bowlers (3 players) :
   - Innings Bowled > 4
   - Bowling Economy < 7
   - Average no. of balls required to take a wicket (Bowling Strike Rate) < 20
   - No of runs allowed per wicket (Bowling Avg) < 20
   - Dot Ball% > 40

---

## **Final Dashboard**

---

[Dashboard1](dashboardimg/Screenshot 2024-12-01 115830.png)

---

[Dashboard2](dashboardimg/Screenshot 2024-12-01 115837.png)

---
