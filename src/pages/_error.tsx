type PropType = {
    statusCode: number;
}
function Error({ statusCode }: PropType) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : "An error occurred on client"}
        </p>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Error.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode, error: err };
};

export default Error;
