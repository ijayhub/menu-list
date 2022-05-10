
import { useState, useEffect } from 'react'


const useFetch = (url) => {
    const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
  useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then(res => {
					if (!res.ok) {
						throw new Error("can't load menu");
					}
					return res.json();
				})
				.then(data=> {
					setData(data);
					setIsPending(false);
				})
				.catch(err => {
					setError(err.message);
					setIsPending(false);
				});
        }, 700);
    }, [url])
    
    
    return { data, isPending, error };
       

  
}

export default useFetch
