function knapsack(tasks, maxhours) {

    const n = tasks.length;
    const dp = Array.from(
        { length: n + 1 },
        () => Array(maxhours + 1).fill(0)
    );
    for (let i = 1; i <= n; i++) {

        const duration = tasks[i - 1].Duration;
        const impact = tasks[i - 1].Impact;

        for (let hour = 0; hour <= maxhours; hour++) {

            if (duration <= hour) {

                const include = impact + dp[i - 1][hour - duration];
                const exclude = dp[i - 1][hour];
                dp[i][hour] = Math.max(include, exclude);

            } else {

                dp[i][hour] = dp[i - 1][hour];

            }

        }

    }

    const selectedTasks = [];

    let hour = maxhours;

    for (let i = n; i > 0; i--) {

        if (dp[i][hour] !== dp[i - 1][hour]) {

            selectedTasks.push(tasks[i - 1]);
            hour -= tasks[i - 1].Duration;

        }

    }

    selectedTasks.reverse();

    return {
        totalImpact: dp[n][maxhours],
        selectedTasks
    };
}

module.exports = knapsack;