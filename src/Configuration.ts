import SupabaseAuthentication from "adapters/supabase/SupabaseAuthentication"
import Authentication from "models/Authentication"

interface AdapterConfiguration {
    authentication: Authentication
}

const SupabaseConfiguration: AdapterConfiguration = {
    authentication: new SupabaseAuthentication(),
}

export default SupabaseConfiguration
