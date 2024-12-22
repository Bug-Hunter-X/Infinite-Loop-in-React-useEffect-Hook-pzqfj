```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Update state based on external factors or use functional update
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```