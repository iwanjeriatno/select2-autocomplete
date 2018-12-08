    public function item()
    {
        $data  = [];
        $input = \Input::get('q');

        if(isset($input)){
            $data = Barang::select('items.id','items.item_code')
                    ->where('items.item_code', 'LIKE', "%$input%")
                    ->get();
        }

        return response()->json($data);
    }
