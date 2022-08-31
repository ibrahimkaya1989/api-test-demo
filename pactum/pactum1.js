const pactum = require("pactum");

describe("Wallbox API Rest", async() => {
    it("should be able to update account information", async() => {
        var email = "jose.crespo+codingsession@wallbox.com";
        var password = "Wallbox1234";

        var authResponse = await pactum
            .spec()
            .withAuth(email, password)
            .get("https://api.wall-box.com/auth/token/user")
            .expectStatus(200);

        await pactum
            .spec()
            .withHeaders("Authorization", "Bearer " + authResponse.json.jwt)
            .put("https://api.wall-box.com/users/data/" + authResponse.json.user_id)
            .withJson({
                name: "CodingSession"
            })
            .expectStatus(200);

        await pactum
            .spec()
            .withHeaders("Authorization", "Bearer " + authResponse.json.jwt)
            .get("https://api.wall-box.com/users/data/" + authResponse.json.user_id)
            .expectStatus(200)
            .expectBodyContains("CodingSession");

        await pactum
            .spec()
            .withHeaders("Authorization", "Bearer " + authResponse.json.jwt)
            .put("https://api.wall-box.com/users/data/" + authResponse.json.user_id)
            .withJson({
                surname: "Test User"
            })
            .expectStatus(200);

        await pactum
            .spec()
            .withHeaders("Authorization", "Bearer " + authResponse.json.jwt)
            .get("https://api.wall-box.com/users/data/" + authResponse.json.user_id)
            .expectStatus(200)
            .expectBodyContains("Test User");
    });
});