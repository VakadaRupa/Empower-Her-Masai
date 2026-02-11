const supabase = require('../config/supabase');

exports.createUser = (user) => {
  return supabase
    .from('users')
    .insert(user)
    .select()
    .single();
};

exports.getAllUsers = () => {
  return supabase
    .from('users')
    .select('*');
};

exports.getUserById = (id) => {
  return supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
};

exports.updateUser = (id, data) => {
  return supabase
    .from('users')
    .update(data)
    .eq('id', id)
    .select()
    .single();
};

exports.deleteUser = (id) => {
  return supabase
    .from('users')
    .delete()
    .eq('id', id);
};
