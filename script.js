<script src="{{ asset('select2.min.js') }}"></script>
<script type="text/javascript">
  $(document).ready(function(){
      $('#items').select2({
          placeholder: 'Cari Barang',
          ajax: {
            url: "{{ route('items.get-items') }}",
            dataType: 'json',
            delay: 250,
            processResults: function (data) {
              return {
                results:  $.map(data, function (item) {
                      return {
                          text: item.item_code,
                          id: item.id
                      }
                  })
              };
            },
            cache: true
          }
      });
  });
</script>
