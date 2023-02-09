import React from 'react';
import {useSearchUsersQuery} from "../store/github/github.api";

export function HomePage() {
    const {isLoading, isError, data} = useSearchUsersQuery('temakulakov_')
    return(
        <div className={"font-source-pro"}>Home</div>
    )
}