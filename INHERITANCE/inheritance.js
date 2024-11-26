var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Anime = /** @class */ (function () {
    function Anime(Name, Friend, Spower, DOB, clan) {
        this.Name = Name;
        this.Friend = Friend;
        this.Spower = Spower;
        this.DOB = DOB;
        this.clan = clan;
    }
    Anime.prototype.calculateAge = function () {
        return new Date().getFullYear() - new Date(this.DOB).getFullYear();
    };
    return Anime;
}());
var Anime2 = /** @class */ (function (_super) {
    __extends(Anime2, _super);
    function Anime2(Name, Friend, Spower, DOB, clan, villian, heroVillian) {
        var _this = _super.call(this, Name, Friend, Spower, DOB, clan) || this;
        _this.villian = villian;
        _this.heroVillain = heroVillian;
        return _this;
    }
    return Anime2;
}(Anime));
var value = new Anime2("NARUTO", "SASUKE", "RASEGAN", "25-7-2002", "UZUMAKI", "MADARA", "ITACHI");
console.log(value);
