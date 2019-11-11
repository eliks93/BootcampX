SELECT day, count(*) as total_duration
FROM assignments
GROUP BY day
ORDER BY day;
