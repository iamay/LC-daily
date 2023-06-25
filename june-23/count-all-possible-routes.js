// 25 June 2023
// 1575. Count All Possible Routes

const countRoutes = ( locations, start, finish, fuel ) => {
    const mod = 10**9 + 7
    const dp = Array.from( { length: locations.length }, _ => Array( fuel + 1 ).fill(0) )
    dp[start][0] = 1
    
    for ( let j = 0; j <= fuel; j++ ) {
        for ( let i = 0; i < locations.length; i++ ) {
            if ( ! dp[ i ][ j ] ) continue
            
            for ( let k = 0; k < locations.length; k++ ) {
                if ( i == k ) continue
                
                tot = j + Math.abs( locations[ k ] - locations[ i ] )
                if ( tot <= fuel ) {
                    dp[ k ][ tot ] += dp[ i ][ j ] % mod
                }
            }
        }
    }

    return dp[ finish ].reduce( ( a, x ) => (a + x) % mod )
}
