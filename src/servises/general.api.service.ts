const baseUrl = import.meta.env.VITE_BASE_URL;

export const getALl = async <T, > (endpoind: string): Promise<T> => {
   return await fetch(`${baseUrl}${endpoind}`).then(res => res.json());
}