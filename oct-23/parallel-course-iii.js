// 18 Oct 2023
// 2050. Parallel Courses III
const minimumTime = (n,relations,time) => {
    let p = time.map( _ => [] ), t = [],
        dfs = i => t[i] = t[i] || ~~Math.max(...p[i].map(dfs))+time[i]
    relations.forEach( ([a,b]) => p[b-1].push(a-1) )
    return p.reduce( (m,_,i) => Math.max(m,dfs(i)), 0 )
}
