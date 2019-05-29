import crypto from "crypto";

const hash = payload => {
    const cypher = crypto.createHash("md5");
    cypher.update(payload);

    return cypher.digest("hex");
};

export default { hash };
