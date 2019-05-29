import $http from "./http.service";

const fetch = (year, limit = 20, offset = 0) => {
    const config = {
        params: {
            format: "comic",
            formatType: "comic",
            dateRange: `${year}-01-01,${year}-12-31`,
            orderBy: "-onsaleDate",
            limit,
            offset,
        },
    };

    return $http
        .get("", config)
        .then(({ data: payload }) => payload.data)
        .catch(err => {
            throw err;
        });
};

const fetchAvailableYears = () => {
    const config = {
        params: {
            format: "comic",
            formatType: "comic",
            orderBy: "onsaleDate",
            limit: 10,
            offset: 200,
        },
    };

    return $http
        .get("", config)
        .then(({ data: payload }) => payload.data.results)
        .then(response =>
            response.filter(each => {
                try {
                    const d = Date.parse(each.dates[0].date);
                    if (isNaN(d)) return false;
                    return true;
                } catch (_) {
                    return false;
                }
            })
        )
        .catch(err => {
            throw err;
        });
};

export default { fetch, fetchAvailableYears };
