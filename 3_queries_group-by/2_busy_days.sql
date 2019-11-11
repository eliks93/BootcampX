SELECT day, count(*) as total_duration
FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day;

