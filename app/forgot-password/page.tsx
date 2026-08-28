'use client';
import {useState} from 'react';
import Link from 'next/link';
import {supabase} from '@/lib/supabase';
const RECOVERY_URL='https://pls-pls13.vercel.app/reset-password';
export default function ForgotPassword(){
 const [email,setEmail]=useState(''); const [msg,setMsg]=useState(''); const [err,setErr]=useState('');
 async function send(e:any){e.preventDefault();setMsg('');setErr('');const {error}=await supabase().auth.resetPasswordForEmail(email,{redirectTo:RECOVERY_URL});if(error){setErr(error.message);return}setMsg('If this email is registered, a password reset link has been sent. Check your inbox.')}
 return <main className="min-h-screen grid place-items-center p-6 bg-slate-50"><form onSubmit={send} className="card p-8 w-full max-w-md"><div className="text-blue-600 font-bold text-sm">PERSONAL LEARNING SYSTEM</div><h1 className="text-3xl font-black mt-2">Reset password</h1><p className="muted text-sm mt-2">Enter the email you use for PLS.</p><input required type="email" className="input mt-6" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>{err&&<p className="text-red-600 text-sm mt-3">{err}</p>}{msg&&<p className="text-green-700 text-sm mt-3">{msg}</p>}<button className="btn btn-primary w-full mt-5">Send reset link</button><Link className="block text-center text-blue-600 mt-4 text-sm" href="/login">← Back to sign in</Link></form></main>
}