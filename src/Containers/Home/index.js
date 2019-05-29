import React, { Fragment, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { comicsAdd, setPage, setTotal } from "../../Actions";

import Comics from "../../Services/comics.service";

import Comic from "../../Components/Comic/comic";
import FetchPage from "../../Components/FetchPage/fetchPage";
import Grid from "./grid";
import Loader from "../../Components/Loader";
import Spinner from "../../Components/Loader/spinner";
import Navbar from "../../Components/Navbar/navbar";

const Home = ({
    comics,
    isFetching,
    itensPerPage,
    comicsAdd,
    setTotal,
    total,
    year,
}) => {
    const fetchPage = () => {
        Comics.fetch(year, itensPerPage, comics.length)
            .then(payload => {
                if (total !== payload.total) setTotal(payload.total);
                comicsAdd(payload.results);
            })
            .catch(console.log);
    };
    const onCallNextHandler = _ => fetchPage();

    useEffect(() => {
        fetchPage();

        Comics.fetchAvailableYears()
            .then(console.log)
            .catch(console.log);
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Navbar />
            <Grid>
                {comics.length > 0
                    ? comics.map(each => (
                          <Comic
                              key={each.id}
                              src={`${each.thumbnail.path}/clean.jpg`}
                              title={`${each.title}`}
                              onClick={() => {
                                  console.log(
                                      `Clicou: [#${each.id}] ${each.title}`
                                  );
                              }}
                          />
                      ))
                    : null}
            </Grid>
            {isFetching && comics.length < 1 ? <Loader /> : null}
            <div
                className="spinner-wrapper"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "32px",
                }}
            >
                {isFetching && comics.length > 0 ? (
                    <Spinner />
                ) : (
                    <FetchPage onCallNext={onCallNextHandler} />
                )}
            </div>
        </Fragment>
    );
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ comicsAdd, setPage, setTotal }, dispatch);

const mapStateToProps = store => ({
    comics: store.comics,
    isFetching: store.loading,
    total: store.page.total,
    itensPerPage: store.page.itensPerPage,
    year: store.years.active,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
