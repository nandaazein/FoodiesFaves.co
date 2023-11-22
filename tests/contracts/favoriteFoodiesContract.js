const itActsAsFavoriteFoodiesModel = (FavoriteFoodies) => {
  it('should return the restaurants that has been added', async () => {
    FavoriteFoodies.putFoodies({ id: 1 });
    FavoriteFoodies.putFoodies({ id: 2 });

    expect(await FavoriteFoodies.getFoodies(1)).toEqual({ id: 1 });
    expect(await FavoriteFoodies.getFoodies(2)).toEqual({ id: 2 });
    expect(await FavoriteFoodies.getFoodies(3)).toEqual(undefined);
  });

  it('should refuse a restaurants from being added if it does not have the correct property', async () => {
    FavoriteFoodies.putFoodies({ aProperty: 'property' });

    expect(await FavoriteFoodies.getAllFoodies()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    FavoriteFoodies.putFoodies({ id: 1 });
    FavoriteFoodies.putFoodies({ id: 2 });

    expect(await FavoriteFoodies.getAllFoodies()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    FavoriteFoodies.putFoodies({ id: 1 });
    FavoriteFoodies.putFoodies({ id: 2 });
    FavoriteFoodies.putFoodies({ id: 3 });

    await FavoriteFoodies.deleteFoodies(1);

    expect(await FavoriteFoodies.getAllFoodies()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the movie has not been added', async () => {
    FavoriteFoodies.putFoodies({ id: 1 });
    FavoriteFoodies.putFoodies({ id: 2 });
    FavoriteFoodies.putFoodies({ id: 3 });

    await FavoriteFoodies.deleteFoodies(4);

    expect(await FavoriteFoodies.getAllFoodies()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteFoodiesModel };
