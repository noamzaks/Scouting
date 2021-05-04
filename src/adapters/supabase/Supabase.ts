import { createClient } from "@supabase/supabase-js"

const url = process.env.REACT_APP_SUPABASE_URL
const key = process.env.REACT_APP_SUPABASE_KEY
if (!url || !key)
    throw new Error("Failed to initialize supabase! Missing .env variables.")

const Supabase = createClient(url!, key!)

export default Supabase
