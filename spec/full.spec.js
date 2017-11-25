describe('Тесты', function() {
  var item,
      view;
  beforeEach(function() {
    item = new Item();
    view = new PopupView({
        model: item,
      });
  });
  it('Existence of model', function() {
    expect(item.url()).toBeDefined();
    var id = 1234;
    item.set('id', id);
    expect(item.url()).toEqual('https://www.sima-land.ru/api/v3/item/1234/');
  });
  it('existing methods of View', function() {
    var view = new PopupView({
      model: item,
    });
    expect(view.openPopup).toBeDefined();
    expect(view.closePopup).toBeDefined();
    expect(view.getItemById).toBeDefined();
    });
  it('Open Popup', function() {
    view.$('.add-item').click();
    expect(view.popup).not.toHaveClass('hidden');
  });
  it('Close Popup', function() {
    view.$('.modal__close').click();
    expect(view.popup).toHaveClass('hidden');
  });
  it('getItemById check', function() {
    var id = view.$('.js_attrs').val(12345);
    var submitBtn = view.$('.js_submit_btn');
    spyOn(PopupView.prototype, 'getItemById');
    view = new PopupView({
      model: item,
    });
    submitBtn.click();
    expect(view.getItemById).toHaveBeenCalled();
  });
});