import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {ArticleService} from "./article.service";
 
describe('MyService Tests', () => {
    let service:ArticleService = new ArticleService();
 
    it('Should return a list of dogs', () => {
        var items = service.getArticles(1,5);
 
        expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky']);
    });
});