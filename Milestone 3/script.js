document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    resumeForm.addEventListener("submit", function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        event.preventDefault();
        // Capture form data
        var formData = {
            name: (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value,
            email: (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value,
            phone: (_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value,
            profilePicture: (_d = document.getElementById("profilePicture")) === null || _d === void 0 ? void 0 : _d.value,
            degree: (_e = document.getElementById("degree")) === null || _e === void 0 ? void 0 : _e.value,
            institution: (_f = document.getElementById("institution")) === null || _f === void 0 ? void 0 : _f.value,
            graduationYear: (_g = document.getElementById("graduationYear")) === null || _g === void 0 ? void 0 : _g.value,
            skills: (_h = document.getElementById("skills")) === null || _h === void 0 ? void 0 : _h.value,
            jobTitle: (_j = document.getElementById("jobTitle")) === null || _j === void 0 ? void 0 : _j.value,
            company: (_k = document.getElementById("company")) === null || _k === void 0 ? void 0 : _k.value,
            workYears: (_l = document.getElementById("workYears")) === null || _l === void 0 ? void 0 : _l.value,
        };
        // Save data to localStorage
        localStorage.setItem("resumeData", JSON.stringify(formData));
        // Redirect to resume.html
        window.location.href = "rasume.html";
    });
});
