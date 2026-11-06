import {createClient} from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL;
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const configured=Boolean(url&&key);
const fallback=new Map();
const storage={
getItem(k){try{return window.localStorage.getItem(k)??fallback.get(k)??null}catch{return fallback.get(k)??null}},
setItem(k,v){fallback.set(k,v);try{window.localStorage.setItem(k,v)}catch{}},
removeItem(k){fallback.delete(k);try{window.localStorage.removeItem(k)}catch{}}
};
export const supabase=configured?createClient(url,key,{auth:{storage,persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'pkce'}}):null;